import { useState } from "react"

export const useCounter = (initialValue: number = 1) => {

    const [counter, setUseCounter] = useState(initialValue);

    const increment = () => setUseCounter(counter + 1);

    const decrement = () => {
        if (counter <= 1) return;

        setUseCounter(counter - 1);
    }

    return {
        counter,

        increment,
        decrement
    }
}
