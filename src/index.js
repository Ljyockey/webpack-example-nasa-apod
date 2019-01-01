/** @jsx h */
import {h, Component, render} from  'preact'
import Hello from './components/hello'

import './styles/main.scss'

export class App extends Component {
    render () {
        return (
            <div class='app-placeholder'>
                <Hello subject={'world'} />
            </div> 
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.querySelector('#webpack-example-nasa-apod-app')
    render(<App />, rootElement)
})