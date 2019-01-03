/** @jsx h */
import {h} from 'preact'

export default function Header (props) {
    return (props.text && <h1 class='apod-header'>{props.text}</h1>)
}