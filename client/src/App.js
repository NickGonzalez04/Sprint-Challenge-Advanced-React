import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state={
       Data:[]
     }
    }

componentDidMount() {
   fetch('http://localhost:5000/api/players')
   .then(res => res.json())
   .then(res => {
   console.log(res); this.setState({userData: res.data})
   })
   .catch(err => console.log('nope'));
};


    render() {
  return (
          <div className="App">
           <h1>Sprint Challenge</h1>




          </div>
  );
    };

}

export default App;
