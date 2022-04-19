import Article from 'src/components/Article/Article'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
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

export const Success = ({ article, id }) => {
  let date = new Date(article.createdAt)
  let dateCreated = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return (
    <Article article={article} dateCreated={dateCreated} />
  )
}
