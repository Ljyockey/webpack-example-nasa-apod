/** @jsx h */
import {h, Component, render} from  'preact'
import Lost from './components/Lost'

import './styles/main.scss'

export class App extends Component {
    render () {
        return (
            <Lost subject={'world'} />
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.querySelector('#pb-app')
    render(<App />, rootElement)
})