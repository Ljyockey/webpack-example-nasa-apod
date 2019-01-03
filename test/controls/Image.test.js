import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import Image from '../../src/controls/Image'

const CLASSNAME = 'apod-image'
const CUSTOM_CLASSNAME = 'foo-class'
const MOCK_SRC = 'foo.jpg'
const MOCK_ALT = 'foo'

describe('Image test', () => {
    test('should render', () => {
        expect(shallow(<Image />)).toBeDefined()
    })
})