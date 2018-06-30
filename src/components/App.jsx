import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';


function App() {
  return (
    <div>
      <style global jsx >{`
        body {
          font-family: Helvetica;
        }
        .box {
          border: none;
          display: block;
          border-bottom: 2px solid #fff;
          margin-bottom: 10px;
        }
        .box:hover {
          border-bottom: 2px solid #ccc;
          outline: 0;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
      <Header/>
      <Switch>
      <Route exact path='/' component={TicketList} />
      <Route path='/newticket' component={NewTicketForm} />
      </Switch>
    </div>
  )
}

export default App
