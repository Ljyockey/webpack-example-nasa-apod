import {h} from 'preact'
import {shallow} from 'preact-render-spy'
import Button from '../../src/controls/Button'

const CLASSNAME = 'apod-button'
const CUSTOM_CLASSNAME = 'foo-className'
const MOCK_TEXT = 'foo'

describe('Button test', () => {
    test('should render', () => {
        expect(shallow(<Button />)).toBeDefined()
    })

    describe('Button - onClick', () => {
        test('should invoke onClick method', () => {
            const onClickFunction = jest.fn()
            const context = shallow(<Button onClick={onClickFunction} />)
            context.simulate('click')
            expect(onClickFunction).toHaveBeenCalledTimes(1)
        })
    })

    describe('Button - text', () => {
        test('should render the supplied text', () => {
            const context = shallow(<Button text={MOCK_TEXT} />)
            expect(context.find(`.${CLASSNAME}`).text()).toBe(MOCK_TEXT)
        })

        test('should not render text if none provided', () => {
            const context = shallow(<Button />)
            expect(context.find(`.${CLASSNAME}`).text()).toBe('')
        })
    })

    describe('Button - className', () => {
        test('should render custom classname when it is passed', () => {
            const context = shallow(<Button className={CUSTOM_CLASSNAME} />)
            expect(context.find(`.${CUSTOM_CLASSNAME}`).length).toBe(1)
        })

        test('should not render custom classname when it is not passed', () => {
            const context = shallow(<Button />)
            expect(context).toBeDefined()
            expect(context.find(`.${CUSTOM_CLASSNAME}`).length).toBe(0)
        })
    })
})