import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material'

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
          <Card sx={{ minWidth: 275, marginTop: 2, marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.body}
              </Typography>
              <Typography
                sx={{ fontSize: 10 }}
                color="text.secondary"
                gutterBottom
              >
                Posted At: {dateCreated}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}
