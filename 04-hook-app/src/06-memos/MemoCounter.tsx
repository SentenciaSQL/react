import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationNunber: number) => {
    console.time('Heavy_stuff_started');

    for (let index = 0; index < iterationNunber; index++) {
        console.log('ahi vamos...');
    }

    console.timeEnd('Heavy_stuff_started');

    return `${iterationNunber} iteraciones ralizadas`;
}

export const MemoCounter = () => {

    const { counter, increment } = useCounter(40_000);
    const { counter: counter2, increment: increment2 } = useCounter(10);

    const myHeavyVakle = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo - useMemo</h1>

            <hr />

            <h4>Counter: {counter}</h4>
            <h4>Counter: {counter2}</h4>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increment}>+1</button>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increment2}>+1 - Counter 2</button>
        </div>
    )
}
