import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import {Lost} from '../../src/components/Lost'

describe('Lost test', () => {
    test('should render', () => {
        expect(shallow(<Lost />)).toBeDefined()
    })
})
