import React, { Component } from 'react';
import axios from 'axios'
import { Card } from 'semantic-ui-react'
class SingleStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: '',
      latest:''
    };
  }

  async componentDidMount() {
    const token = 'pk_60ef2a46b58e4d3e9ba1c7138a8eed18'
    let url =`https://cloud.iexapis.com/stable/stock/${this.props.symbol}/quote?token=${token}`
    await axios.get(url)
    .then(response => response.data)
    .then(data=>{
      this.setState({
        change: data.change,
        latest: data.latestPrice
      });
    })
    .catch(e=>{
      console.log(e);
    })

  }


  render() {
    const {company, qty, symbol} = this.props
    const {change,latest} = this.state
    let total= qty * latest;

    return (<Card raised key={symbol} className="card-style"
      className={
        (change == 0)
          ? 'grey-back'
          : (change > 0)?'green-back' : 'red-back'
      }
            >
      <Card.Content>
        <Card.Header className="card-style-2">{company}</Card.Header>
        <Card.Description className="card-style">
          You currently own {qty} shares of {symbol}. Each share is worth ${latest}.
        </Card.Description>
      </Card.Content>
      <Card.Content className="card-style">
        Total Value: ${total.toFixed(2)}
      </Card.Content>

    </Card>);
  }

}

export default SingleStock;
