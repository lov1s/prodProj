import {useState} from "react";
import classes from "./Counter.scss"
export const Counter = () => {
    const [count, setCount] = useState(0);

    const handler = () => {
        return setCount(count + 1)
    }
    return <div>
        <h1>{count}</h1>
        <button className={classes.btn} onClick={handler}>Increment</button>
    </div>
}