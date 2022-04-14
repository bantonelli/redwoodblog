import { render } from '@redwoodjs/testing/web'

import ThirdPage from './ThirdPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ThirdPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThirdPage />)
    }).not.toThrow()
  })
})
