/** @jsx h */
import {h} from 'preact'

export default function Button (props) {
    return (<button
            onClick={props.onClick}
            class={`apod-button ${props.className || ''}`}>
                {props.text && props.text}
        </button>)
}