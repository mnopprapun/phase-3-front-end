import Game from 'src/Comonents/Game.js';
import Board from 'src/Comonents/Board.js'
import './App.css';
import { render } from '@testing-library/react';

function App() {

  fetch("http://localhost:9292/Users")
  .then((res) => res.json())
  .then(console.log); 

  function Square(props) {
    return ( 
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  render()
  return(
    <Game>

    </Game>
  )

}
export default App;
