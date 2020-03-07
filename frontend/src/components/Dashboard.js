import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
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
    return (<div>
      <nav>
        <Link className="nav-item" to = "/"> <div>Portfolio</div></Link>
        <Link className="nav-item" to = "/transactions"> <div>Transactions</div></Link>
      </nav>

      <Route exact path = '/' render={()=> <Portfolio/>}/>
      <Route path = '/transactions' render={()=> <Transaction/>}/>

    </div>);
  }

}

export default Dashboard;
