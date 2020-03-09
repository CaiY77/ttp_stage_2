import React, { Component } from 'react';
import axios from 'axios'
import {Grid, Card, Form, Message,Header,Input,Button, Icon} from 'semantic-ui-react'
import { makeStock } from '../service/apiservice.js'
import SingleStock from './SingleStock.js'

let changer='';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
      searchErr:false,
      qtyErr: false,
      result: {},
      qty:'',
      success:false,
      change:''
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
        result: data,
        searchErr: false
      });
    })
    .catch(e=>{
      this.setState({
        searchErr: true
      });
      setTimeout(()=>{
        this.setState({
          searchErr:false
        });
      },2000)
    })
  }

  checkStock = async () => {
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
        "change": result.change,
        "price": result.latestPrice
      }
      const newStock = await makeStock(user.id,Stock);
      this.props.spend(cost);
      this.setState({
        success: true,
        results: {},
        qty:''
      });
      setTimeout(()=>{
        this.setState({
          success:false
        });
      },2500)
    }
  }

  cancelSearch=()=>{
    this.setState({
      result:{}
    });
  }

  filterStocks = (arr) => {
    const {change} = this.state
    let obj = {};
    let mergeArr = []
    arr.forEach(e => {
      if (obj[e.symbol] !== e.symbol) {
        obj[e.symbol] = { qty: 0, symbol: e.symbol, company: e.company,price: e.price}
      }
    })

    for (let i of Object.values(obj)) {
      mergeArr.push(i)
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < mergeArr.length; j++) {
        if (arr[i].symbol === mergeArr[j].symbol) {
          mergeArr[j].qty += arr[i].qty
        }
      }
    }
    return mergeArr;
  }


  render() {
    const {searchErr, result, qtyErr,qty,success} = this.state
    const {stocks, user} = this.props
    let final = this.filterStocks(stocks)

    return (
      <div>

        <div className="wel-bud">
          <h1 className="welcome-back">Welcome back, {user.fullname} !</h1>
          <h1 className="budget-style">My Budget: $ {user.wallet.toFixed(2)}</h1>
        </div>

        <Grid className="grid-style">
          <Grid.Column width={5} className="left-column">
            <Form onSubmit={this.findStock}>
              <Form.Input required name="search" icon="search" placeholder="Enter a Stock Symbol" onChange={this.handleInputs}/>
            </Form>
            {
              (searchErr)
                ?(<Message
                  error
                  content="This is an invalid search value"
                  />)
                : null
            }
            {
              (Object.entries(result).length)
                ? <Card fluid>
                  <Card.Content>
                    <Card.Header className="card-style-2">{result.companyName} <Button onClick={this.cancelSearch} className="button-position" icon="close"/></Card.Header>
                    <Card.Meta className="card-style">{result.symbol}</Card.Meta>
                    <Card.Description className="card-style">Current Price: ${result.latestPrice}</Card.Description>

                  </Card.Content>
                  <Card.Content extra>
                    <Form onSubmit={this.checkStock}>
                      <Form.Group className="qty-style">
                        <Form.Input value={qty} name='qty' placeholder={`$${result.latestPrice}`} onChange={this.handleInputs} type="number" min="0" step="0"/>
                        <Form.Button type="submit" content="Buy" color="green"/>
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
            {
              (success)
                ?<Message
                  color="green"
                  header="Success"
                  content="Your purchase was successful!"
                 />
                :null
            }
          </Grid.Column>
          <Grid.Column width={11} className="right-column">
            {
              (stocks.length)
                ? (<Card.Group stackable itemsPerRow="1">
                  {
                    final.map(stock=>
                      <SingleStock
                        company={stock.company}
                        qty={stock.qty}
                        symbol={stock.symbol}
                      />)
                  }
                </Card.Group>)
                : <Message
                  className = 'no-stock'
                  size="big"
                  color="yellow"
                  content="Your portfolio is currently empty. Search and purchase your first stock today!"
                  />
            }
          </Grid.Column>
        </Grid>
      </div>
    );
  }

}

export default Portfolio;
