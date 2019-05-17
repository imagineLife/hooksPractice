import React from 'react'
import Count from './index'
import { configure, shallow } from "enzyme"

describe('<Count />', () => {
	it('renders', () => {
		shallow(<Count />)
	})
	describe('interacts:', () => {
		it('increments 1 when clicked', () => {
			const count = shallow(<Count />);
			const btn = count.find('button');
			
			//check initial value
			expect(btn.text()).toBe("0")
			
			//click && re-check
			btn.simulate('click');
			expect(count.find('button').text()).toBe("1");
		})
	})
})