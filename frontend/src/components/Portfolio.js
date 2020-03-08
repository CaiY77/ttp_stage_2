import React, { Component } from 'react';
import axios from "axios"
import {Grid, Card, Form, Message,Header} from 'semantic-ui-react'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
      searchErr:false,
      qtyErr: false,
      result: {}
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



  render() {
    const {searchErr, result} = this.state
    return (
      <div>
        <h1 className="budget-style">My Budget: {this.props.user.wallet}</h1>
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
                ? <div>t</div>
                : (<Message
                  header="You have no search results"
                  content="Enter the symbol of the stock you want to buy"
                  />)
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
