import React from 'react'
// import Header from './Header'
// import TicketList from './TicketList'

function App(){
  return (
    <div>
      <style global jsx>{`
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
      <div style={{margin: '19px auto 0', width: 142}}>
        <a href="https://medium.com/" target="_blank">
          <div className="box">
            <h1>this content will change on hover because we're using styled-jsx! It would even change if our div with className 'box' was in a nested component! So cool!</h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
