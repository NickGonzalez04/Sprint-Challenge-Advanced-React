import React from 'react';
import axios from 'axios';
import NavBar from './components/navBar';
import PlayerList from './components/playerlist.js';
import './App.css';

class App extends React.Component{
  _isMounted = false;
  constructor(){
    super();
  this.state = {
       data: []
     }
    } 

componentDidMount() {
  this._isMounted = true;
   axios.get('http://localhost:5000/api/players')

   .then(data => {
     if(this._isMounted){
    this.setState({
      data: data.data})
   .catch(err => console.log('nope'));
};
     })
     };
    
    


componentWillUnmount() {
  this._isMounted = false;
}

    render() {
      console.log(this.state.data);
  return (
          <div className="App">
          <NavBar />
            <div className="Player-List">
           {this.state.data.map(players => {
             return <PlayerList key={players.id} players={players}/>
           })}
          </div>
          </div>
  );
    };

}

export default App;
