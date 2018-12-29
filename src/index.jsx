/** @jsx h */
import {h, Component, render} from  'preact'

class App extends Component {
    render () {
        return (
            <div class='app-placeholder'>
                Hello, world!
            </div> 
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    render(<App />, '#webpack-example-nasa-apod-app')
})