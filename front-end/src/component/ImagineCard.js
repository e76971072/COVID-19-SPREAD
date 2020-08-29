import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import Media from 'react-media';


const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    boxShadow: '0 10px 20px 2px #181A28', 
    borderRadius: '1.25rem',
    margin: "2em",
    flex: 1,
  },
  bullet: {
    display: 'flex',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 15,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function ImagineCard( props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const obj = props.titleName
  const numberCases = props.state
  const setStyle = props.style

  const dateConvert = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let separator=' '
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    return `${monthNames[month-1]}${separator}${date}${separator}${year}`
  }
  return (
    <div >

    <Media queries={{
      small: "(max-width: 700px)",
     
    }}>
    <Card className={classes.root}>
      <CardContent style= {{ height: "200px"}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {obj.icon}
        </Typography>
        <Typography  style=  {{ color: `${setStyle}`,fontWeight: "400",  fontFamily:"Avenir Next W01 , Avenir Nex", fontSize: "20px"}} variant="h5" component="h2">
            <CountUp start={numberCases/2} end={numberCases} />
        </Typography>
        <Typography style=  {{ color: `${setStyle}` }} className={classes.pos} color="textSecondary">
        {obj.title}
        </Typography>
        <Typography variant="body2" component="p">
        
          {dateConvert()}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Media>
    <Media queries={{
        medium: "(min-width: 701px) and (max-width: 900px)"
     
    }}> 
    <Card className={classes.root}>
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {obj.icon}
        </Typography>
        <Typography  style=  {{ color: `${setStyle}`,fontWeight: "400",  fontFamily:"Avenir Next W01 , Avenir Nex", fontSize: "25px"}} variant="h5" component="h2">
            <CountUp start={numberCases/2} end={numberCases} />
        </Typography>
        <Typography style=  {{ color: `${setStyle}` }} className={classes.pos} color="textSecondary">
        {obj.title}
        </Typography>
        <Typography variant="body2" component="p">
        
          {dateConvert()}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Media>
    <Media queries={{
        medium: "(min-width:900px) and (max-width: 1025px)"
     
    }}> 
    <Card className={classes.root}>
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {obj.icon}
        </Typography>
        <Typography  style=  {{ color: `${setStyle}`,fontWeight: "400",  fontFamily:"Avenir Next W01 , Avenir Nex", fontSize: "60px"}} variant="h5" component="h2">
            <CountUp start={numberCases/2} end={numberCases} />
        </Typography>
        <Typography style=  {{ color: `${setStyle}` }} className={classes.pos} color="textSecondary">
        {obj.title}
        </Typography>
        <Typography variant="body2" component="p">
        
          {dateConvert()}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Media>
    <Media queries={{
        medium: " ( min-width: 1026px)"
     
    }}> 
    <Card className={classes.root}>
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {obj.icon}
        </Typography>
        <Typography  style=  {{ color: `${setStyle}`,fontWeight: "400",  fontFamily:"Avenir Next W01 , Avenir Nex", fontSize: "85px"}} variant="h5" component="h2">
            <CountUp start={numberCases/2} end={numberCases} />
        </Typography>
        <Typography style=  {{ color: `${setStyle}` }} className={classes.pos} color="textSecondary">
        {obj.title}
        </Typography>
        <Typography variant="body2" component="p">
        
          {dateConvert()}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Media>
    </div>

  );
}
