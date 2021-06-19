import React from 'react'
import Home from '../../pages/index'
import { cleanup, render } from '../test.util'

afterEach(cleanup)

describe('HomePage', () => {
  it('should be created', () => {
    const element = render(<Home />)
    expect(element).toBeTruthy()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
