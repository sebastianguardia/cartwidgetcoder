import React,{ useState } from 'react';
import './counter.css'

export const ItemCounter = ({initial,stock}) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount (count - 1);
  }
  const increase = () => {
    setCount (count + 1);
  }
  return (
    <div className='counter'>
        <button disabled={count <=1} onClick ={decrease}>-</button>
        <span>{count}</span>
        <button disabled ={count >= stock } onClick ={increase}>+</button>
        <div>
            <button disabled = {stock <= 0}> Agregar al Carrito</button>
        </div>
    </div>
  );
}

export default ItemCounter;