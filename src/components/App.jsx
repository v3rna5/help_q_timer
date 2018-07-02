import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import NewTicketControl from './NewTicketControl'
import Error404 from './Error404'
import { Switch, Route } from 'react-router-dom'
import Moment from 'moment'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: []
    }
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    )
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.waitTimeUpdateTimer)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice()
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    )
    this.setState({masterTicketList: newMasterTicketList})
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice()
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
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
