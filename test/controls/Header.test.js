import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import Header from '../../src/controls/Header'

const CLASSNAME = 'apod-header'
const MOCK_TEXT = 'foo'

describe('Header test', () => {
    test('should render', () => {
        expect(shallow(<Header />)).toBeDefined()
    })

    describe('Header - rendering text', () => {
        test('should render element when text is supplied', () => {
            const context = shallow(<Header text={MOCK_TEXT} />)
            expect(context.find(`.${CLASSNAME}`).length).toBe(1)
            expect(context.find(`.${CLASSNAME}`).text()).toBe(MOCK_TEXT)
        })
        test('should not render element if no text is provided', () => {
            const context = shallow(<Header />)
            expect(context).toBeDefined()
            expect(context.find(`.${CLASSNAME}`).length).toBe(0) 
        })
    })
})