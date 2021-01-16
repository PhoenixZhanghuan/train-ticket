import React, {useState, useMemo, memo, useEffect, PureComponent, useRef, useCallback} from 'react';

// const Counter = memo(function Counter(props) {
//     console.log("Counter render")
//     return (
//         <h1 onClick={props.onClick}>{props.count}</h1>
//     )
//
// });

class Counter extends PureComponent {

    speak() {
        console.log(`new counter is: ${this.props.count}`)
    }

    render() {
        const {props} = this;
        return (
            <h1 onClick={props.onClick}>{props.count}</h1>
        );
    }

}

function App(Props) {
    const [count, setCount] = useState(0)
    const [clickCount, setClickCount] = useState(0)
    const counterRef = useRef();
    let it = useRef();
    const double = useMemo(() => {
        return count * 2
    }, [count === 3]);

    const onClick = useCallback(() => {
        console.log('Click');
        setClickCount((clickCount) => clickCount + 1);
        counterRef.current?.speak();
    }, [counterRef]);

    useEffect(() => {
        it.current = setInterval(() => {
            setCount(count => count + 1);
        }, 1000)
    }, []);

    useEffect(() => {
        if(count >= 10) {
            clearInterval(it.current);
        }
    });
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Count ({count}), double: ({double})
            </button>
            <Counter ref={counterRef} count={double} onClick={onClick}/>

        </div>
    )

}


export default App
