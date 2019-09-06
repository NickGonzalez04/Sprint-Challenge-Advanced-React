import React from 'react';
import axios from 'axios';
import PlayerList from './components/playerlist.js';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
  this.state = {
       data: []
     }
    } 

componentDidMount() {
   axios.get('http://localhost:5000/api/players')
  //  .then(res => res.json())
   .then(data => {
   console.log('Player data',data); this.setState({data: data.data})})
   .catch(err => console.log('nope'));
};


    render() {
      console.log(this.state.data);
  return (
          <div className="App">
             <h1>Sprint Challenge</h1>
          
           {this.state.data.map(players => {
             return <PlayerList key={players.id} players={players}/>
           })}
          
          </div>
  );
    };

}

export default App;
