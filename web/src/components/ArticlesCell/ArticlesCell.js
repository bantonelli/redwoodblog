import Article from "src/components/Article/Article"

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  let date = null
  let dateCreated = null
  return (
    <div>
      {articles.map((item) => {
      date = new Date(item.createdAt)
      dateCreated = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        return (
          <Article article={item} dateCreated={dateCreated} key={item.id} />
        )
      })}
    </div>
  )
}
