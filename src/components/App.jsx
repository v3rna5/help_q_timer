import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import NewTicketControl from './NewTicketControl'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: []
    }
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this)
  }
  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice()
    newMasterTicketList.push(newTicket)
    this.setState({masterTicketList: newMasterTicketList})
  }


  render(){
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }

}


export default App
