/** @jsx h */
import {h} from 'preact'

export default function Image(props) {
    return (props.src &&
        <img
            src={props.src}
            class={`apod-image ${props.className || ''}`}
            alt={props.alt ? props.alt : ''} />)
}