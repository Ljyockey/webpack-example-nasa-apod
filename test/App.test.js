import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import {App} from '../src/index'

describe('App test', () => {
    test('should render', () => {
        expect(shallow(<App />)).toBeDefined()
    })
})

