/** @jsx h */
import {h} from 'preact'

export default function Paragraph (props) {
    const classNameAppendix = props.isError ? 'error' : 'description'
    return (props.text &&
        <p class={`apod-paragraph apod-paragraph__${classNameAppendix}`}>{props.text}</p>)
}