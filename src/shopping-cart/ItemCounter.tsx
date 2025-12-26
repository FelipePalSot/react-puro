
import { useState } from "react";

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: Props) => {/**Puse quantity = 1, porque en el interface quantity? , es opcional  */

    const [count, setCount] = useState(quantity); /**USando useState */

    // const handleClick = (event: MouseEvent) =>{
    //     console.log(`Click en ${name}`)
    // }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if( count === 1) return;

        setCount(count - 1);
    }
    
  return (
    <section
        className={styles.itemRow}
        // style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10,
        //     }}
    >
        <span
            className={styles['item-text']}
            style={{
                color: count === 1 ? 'red' : 'black' , //si ponia quantity siempre se queda en red, ya que quantity siempre sera 1, count es lo q varia
            }}
        >
            {name}
        </span>
        <button onClick={handleAdd}>
            +1
        </button>
        <span>{count}</span>
        <button onClick={handleSubtract}>-1</button>
    </section>
  );
  
};
