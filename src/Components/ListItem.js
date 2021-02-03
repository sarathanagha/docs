import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '2px 0',
    overflow: 'initial'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ question }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const answer = question.a;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {question.q}
        </Typography>
        {
          typeof answer === 'string' ? <Typography variant="body2" component="p">
          {question.a}      
         </Typography> : (<ul> 
           {
             answer.map((ans)=>{
              return <li>{ans}</li>
             })
           }
         </ul>)
        }
        {
          question.img && <img  src={`/images/${question.img}.PNG`}/>
        }
      </CardContent>
    </Card>
  );
}
