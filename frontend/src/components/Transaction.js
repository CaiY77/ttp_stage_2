import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import {Redirect} from 'react-router'
const moment = require('moment');

class Transaction extends Component {

  renderTransactions = () => {
    const { stocks } = this.props

    const myTrans = stocks.map(stock=>{
      const total = stock.qty * stock.price;
      const dateString = stock.createdAt;
      const momentDate = moment(dateString)

      return <Card raised key={stock.id} className="card-style" >
        <Card.Content>
          <Card.Header className="card-style-2">{stock.company}</Card.Header>
          <Card.Meta className="card-style">{momentDate.format("LLLL")}</Card.Meta>
          <Card.Description className="card-style">
            You purchsed {stock.qty} shares of {stock.symbol} at ${stock.price} a share.
          </Card.Description>
        </Card.Content>
        <Card.Content className="card-style">
          Total: $ {total}
        </Card.Content>

      </Card>
    });

    return myTrans;
  }

  render() {
    if (this.props.isLogged === false) {
      return <Redirect to='/' />
    }
    return (<div className="trans-contain">
      <Card.Group stackable itemsPerRow="1">
        {this.renderTransactions()}
      </Card.Group>
    </div>);
  }

}

export default Transaction;
