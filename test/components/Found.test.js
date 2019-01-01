import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import {Found} from '../../src/components/Found'

describe('Found test', () => {
    test('should render', () => {
        expect(shallow(<Found />)).toBeDefined()
    })
})
