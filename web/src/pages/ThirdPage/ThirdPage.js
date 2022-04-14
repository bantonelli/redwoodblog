import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ThirdPage = () => {
  return (
    <>
      <MetaTags title="Third" description="Third page" />

      <h1>ThirdPage</h1>
      <p>
        Find me in <code>./web/src/pages/ThirdPage/ThirdPage.js</code>
      </p>
      <p>
        My default route is named <code>third</code>, link to me with `
        <Link to={routes.third()}>Third</Link>`
      </p>
    </>
  )
}

export default ThirdPage
