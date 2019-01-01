/** @jsx h */
import {h, Component, render} from  'preact'

export class App extends Component {
    render () {
        return (
            <div class='app-placeholder'>
                Hello, world!
            </div> 
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.querySelector('#webpack-example-nasa-apod-app')
    render(<App />, rootElement)
})