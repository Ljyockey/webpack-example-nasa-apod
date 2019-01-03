import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import Header from '../../src/controls/Header'

const CLASSNAME = 'apod-header'
const MOCK_TEXT = 'foo'
const CUSTOM_CLASSNAME = 'foo-class'

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

    describe('Header - custom classname', () => {
        test('should render custom classname when it is passed', () => {
            const context = shallow(<Header text={MOCK_TEXT} className={CUSTOM_CLASSNAME} />)
            expect(context.find(`.${CUSTOM_CLASSNAME}`).length).toBe(1)
        })

        test('should not render custom classname when it is not passed', () => {
            const context = shallow(<Header text={MOCK_TEXT} />)
            expect(context).toBeDefined()
            expect(context.find(`.${CUSTOM_CLASSNAME}`).length).toBe(0)
        })
    })
})