import logo from './logo.svg';
import './App.css';

function App() {
  const getJson = ()=> {
    fetch("/getInfo").then((res)=>{
      console.log(res);
    }, 
    (rej)=>{
      console.log('rejected'+rej);
    });
  }
  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getJson()}>send request</button>
     
    </div>
  );
}

export default App;
