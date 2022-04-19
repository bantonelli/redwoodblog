import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material'
import { routes, Link } from '@redwoodjs/router'
const Article = ({article, dateCreated}) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </Typography>
        <Typography variant="body2">{article.body}</Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          Posted At: {dateCreated}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Article
