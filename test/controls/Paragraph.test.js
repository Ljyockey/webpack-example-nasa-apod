import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import Paragraph from '../../src/controls/Paragraph'

const MOCK_TEXT = 'foo'
const COMMON_CLASSNAME = 'apod-paragraph'
const BASE_CLASSNAME = 'apod-paragraph__'

describe('Paragraph test', () => {
    test('should render', () => {
        expect(shallow(<Paragraph text={MOCK_TEXT}/>)).toBeDefined()
    })

    describe('Paragraph - error message', () => {
        const context = shallow(<Paragraph text={MOCK_TEXT} isError/>)
        test('should render text with error className when isError is true', () => {
            expect(context.find(`.${BASE_CLASSNAME}error`).length).toEqual(1)
            expect(context.find(`.${BASE_CLASSNAME}description`).length).toEqual(0)
            expect(context.find(`.${COMMON_CLASSNAME}`).text()).toEqual(MOCK_TEXT)
        })
    })

    describe('Paragraph - description message', () => {
        const context = shallow(<Paragraph text={MOCK_TEXT} />)
        test('should render text with description className when isError is falsy', () => {
            expect(context.find(`.${BASE_CLASSNAME}error`).length).toEqual(0)
            expect(context.find(`.${BASE_CLASSNAME}description`).length).toEqual(1)
            expect(context.find(`.${COMMON_CLASSNAME}`).text()).toEqual(MOCK_TEXT)
        })
    })

    describe('Paragraph - no text prop', () => {
        test('shouldnt render without text prop', () => {
            const context = shallow(<Paragraph />)
            expect(context).toBeDefined()
            expect(context.find(`.${COMMON_CLASSNAME}`).length).toBe(0)
        })
    })
})