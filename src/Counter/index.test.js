import React from 'react'
import Count from './index'
import { configure, shallow } from "enzyme"

describe('<Count />', () => {
	it('renders', () => {
		shallow(<Count />)
	})
})