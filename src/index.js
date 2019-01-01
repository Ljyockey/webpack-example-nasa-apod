/** @jsx h */
import {h, Component, render} from  'preact'
import Hello from './components/Hello'

import './styles/main.scss'

export class App extends Component {
    render () {
        return (
            <Hello subject={'world'} />
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.querySelector('#webpack-example-nasa-apod-app')
    render(<App />, rootElement)
})