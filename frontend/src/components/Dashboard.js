import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import Portfolio from './Portfolio.js'
import Transaction from './Transaction.js'

class Dashboard extends Component {
constructor(props) {
  super(props);
  this.state = {
    active: "portfolio"
  };
}
  render() {
    const { stocks, fetchStocks, isLogged, user,spend } = this.props
    return (<div>
      <nav className="ui secondary menu">

        <Link className="custom-style" to = "/"> <div>Portfolio</div></Link>
        <Link className="custom-style" to = "/transactions"> <div>Transactions</div></Link>
        <div className="right menu">
          <Link to = "/" onClick={this.props.logout}><Button inverted color="red" className="logout-style resp">Sign Out</Button></Link>
        </div>

      </nav>

      <Route exact path = '/' render={()=> <Portfolio user={user} stocks={stocks} fetchStocks={fetchStocks} spend={spend}/>}/>
      <Route path = '/transactions' render={()=> <Transaction stocks={stocks} isLogged={isLogged}/>}/>

    </div>);
  }

}

export default Dashboard;
