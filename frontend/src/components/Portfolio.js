import React, { Component } from 'react';
import axios from "axios"
import {Grid, Card, Form, Message,Header,Input,Button} from 'semantic-ui-react'
import { makeStock } from '../service/apiservice.js'


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
      searchErr:false,
      qtyErr: false,
      result: {},
      qty:'',
    };
  }

  handleInputs = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  findStock = async() =>{
    const { search, searchErr } = this.state
    const token = 'pk_60ef2a46b58e4d3e9ba1c7138a8eed18'
    let url =`https://cloud.iexapis.com/stable/stock/${search}/quote?token=${token}`
    await axios.get(url)
    .then(response => response.data)
    .then(data=>{
      this.setState({
        result: data
      });
    })
    .catch(e=>{
      this.setState({
        searchErr: true
      });
      setTimeout(()=>{
        this.setState({
          searchErr: false
        });
      },2000);
    })
  }

  checkStock = async () => {
    console.log("check")
    const {result , qty} = this.state
    const {user} = this.props
    const budget = user.wallet;
    const cost = qty * result.latestPrice;

    if((result.latestPrice * qty) > budget){
      this.setState({
        qtyErr: true
      });
      setTimeout(()=>{
        this.setState({
          qtyErr: false
        });
      },2000);
    } else {
      const Stock = {
        "company": result.companyName,
        "symbol": result.symbol,
        "qty": qty,
        "price": result.latestPrice
      }
      const newStock = await makeStock(user.id,Stock);
      this.props.spend(cost);
    }
  }


  render() {
    const {searchErr, result, qtyErr} = this.state
    return (
      <div>
        <h1 className="welcome-back">Welcome back, {this.props.user.fullname} !</h1>
        <h1 className="budget-style">My Budget: $ {this.props.user.wallet}</h1>
        <Grid className="grid-style">
          <Grid.Column width={5} className="left-column">
            <Form onSubmit={this.findStock}>
              <Form.Input required name="search" icon="search" placeholder="Enter a Stock Symbol" onChange={this.handleInputs}/>
            </Form>
            {
              (searchErr)
                ?(<Message
                  error
                  className="make-fade"
                  content="This is an invalid search value"
                  />)
                : null
            }
            {
              (Object.entries(result).length)
                ? <Card fluid>
                  <Card.Content>
                    <Card.Header className="card-style-2">{result.companyName}</Card.Header>
                    <Card.Meta className="card-style">{result.symbol}</Card.Meta>
                    <Card.Description className="card-style">Current Price: ${result.latestPrice}</Card.Description>

                  </Card.Content>
                  <Card.Content extra>
                    <Form onSubmit={this.checkStock}>
                      <Form.Group className="qty-style">
                        <Form.Input name='qty' placeholder={`$${result.latestPrice}`} onChange={this.handleInputs} type="number" min="0" step="0"/>
                        <Button type="submit" content="Buy" color="green"/>
                      </Form.Group>
                    </Form>
                  </Card.Content>
                </Card>
                : (<Message
                  header="You have no search results"
                  content="Enter the symbol of the stock you want to buy"
                   />)
            }
            {
              (qtyErr)
                ?(<Message
                  error
                  content="Please cheack to make sure you have enough money in your budget."
                  />)
                : null
            }
          </Grid.Column>
          <Grid.Column width={11} className="right-column">
            Portfolio
          </Grid.Column>
        </Grid>
      </div>
    );
  }

}

export default Portfolio;
