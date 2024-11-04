import logo from './logo.svg';
import {useState} from 'react'
import './App.css';



/*
What Components are there?
- display component,
- button component,
- global container component

What state?
useState const [equation, useEquation]
What props ? hooks?




*/




/**display */
export const Display = ({equation}) => {
  return(
<div className = "display"> 
{equation}
</div>
  )
}


// TODO equals button separately,

const Calculator = () => {
  const [equation, setEquation] = useState('')
  
  return (
    <div>
      <Display equation = {equation} />
      <Keypad setEquation={setEquation}/>
      
    </div>
 );
}

export default Calculator;


const Keypad = ({ setEquation }) => {
const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"]

  return (
  <ul>
    {buttons.map(
      value => (
        <li key={value}>
          <button onClick={() => setEquation(equation => equation += value)}>
            {value}
          </button>
        </li>
      )
    )}
    <li><button onClick={() => setEquation('')}>clear</button></li>
    <li><button>=</button></li>
  </ul>
  )
} 



/*
  hooks only go inside functional componenets
  
*/