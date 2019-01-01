/** @jsx h */
import {h} from  'preact'

export default function Hello (props) {
    return <div class='hello'>Hello, {props.subject}!</div>
}