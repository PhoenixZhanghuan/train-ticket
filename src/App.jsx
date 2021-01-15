import React, {useState, useMemo, memo, useCallback} from 'react';


const Counter = memo(function Counter(props) {
    console.log("Counter render")
    return (
        <h1 onClick={props.onClick}>{props.count}</h1>
    )

});

function App(Props) {
    const [count, setCount] = useState(0)
    const [clickCount, setClickCount] = useState(0)
    const double = useMemo(() => {
        return count * 2
    }, [count === 3]);

    const onClick = useCallback(() => {
        console.log('Click');
        setClickCount((clickCount) => clickCount + 1);
    }, [clickCount]);
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Count ({count}), double: ({double})
            </button>
            <Counter count={double} onClick={onClick}/>

        </div>
    )

}


export default App
