import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 13
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default App
