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

    describe('Image - src', () => {
        test('should not render without src', () => {
            const context = shallow(<Image />)
            expect(context).toBeDefined()
            expect(context.find(`.${CLASSNAME}`).length).toBe(0)
        })

        test('should render with src', () => {
            const context = shallow(<Image src={MOCK_SRC} />)
            expect(context.find(`.${CLASSNAME}`).length).toBe(1)
            expect(context.attrs().src).toBe(MOCK_SRC)
        })
    })

    describe('Image - alt', () => {
        test('should render blank alt if none supplied', () => {
            const context = shallow(<Image src={MOCK_SRC} />)
            expect(context.find(`.${CLASSNAME}`).length).toBe(1)

            // workaround because a black alt doesn't appear in attributes
            expect(context.attrs().alt).not.toBeDefined()
        })

        test('should supplied alt', () => {
            const context = shallow(<Image src={MOCK_SRC} alt={MOCK_ALT} />)
            expect(context.find(`.${CLASSNAME}`).length).toBe(1)
            expect(context.attrs().alt).toBe(MOCK_ALT)
        })
    })

    describe('Image - className', () => {
        test('should render custom classname when it is passed', () => {
            const context = shallow(<Image src={MOCK_SRC} className={CUSTOM_CLASSNAME} />)
            expect(context.find(`.${CUSTOM_CLASSNAME}`).length).toBe(1)
        })

        test('should not render custom classname when it is not passed', () => {
            const context = shallow(<Image src={MOCK_SRC} />)
            expect(context).toBeDefined()
            expect(context.find(`.${CUSTOM_CLASSNAME}`).length).toBe(0)
        })
    })
})