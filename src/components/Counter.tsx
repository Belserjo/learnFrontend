import React, {useState} from 'react';
import styles from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className={styles.button}>
            <h1 className={styles.her}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    );
};

