import React, {Component, memo} from 'react'

const Foo = memo(function Foo(props) {

    console.log('Foo render');
    return null;

});

class App extends Component {

    state = {
        count: 0,
    }

    render() {

        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Add
                </button>
                <Foo name="Mike" />
            </div>
        )
    }
}


export default App
