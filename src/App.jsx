
import './App.css'
import Counter from './counter';
import Friends from './friends';
import Photos from './photos';
import Team from './team';
import Users from './user';
import Posts from './posts';
import { useState } from 'react';


function App() {
  
  function handleClick(){
    alert ('button clicked',);
  }

  const handleClick2 = () => {
    alert('button clicked 2')
  }

  const addToFive = (num) => {
    alert (num + 5);

  }
  const [counte, setCount] = useState(0)
  return (
    <>
     
      <h3>React Core Concepts 2</h3>
      
      <Friends></Friends>
      <Photos></Photos>
      <Team></Team>
      <Counter></Counter>
      <Users></Users>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third clicked')}}>Click 3</button>
      <button onClick={()=>addToFive(3)}>Four</button>

      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handeler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
