import { render } from '@redwoodjs/testing/web'

import AlternativeLayout from './AlternativeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AlternativeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AlternativeLayout />)
    }).not.toThrow()
  })
})
