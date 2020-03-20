import React from 'react'
import './style/welcome.css'
import BodyBackgroundColor from 'react-body-backgroundcolor'
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        fontFamily:'Sarabun', 
      },
    },
  }));
  
  function closeWeb() {
    alert('You already know me, Bye! \n รู้จักยีนแล้วหรอ งั้นบั๊บบาย👋🏻')
    window.open("about:blank", "_self");
    window.close();
  }


const Welcome = () => {
    const classes = useStyles();
    
    return (
        <BodyBackgroundColor backgroundColor='#DDD1F1'>
            <Container>
                <div className="center" id="header">
                    <h1 className="header">I'm not a LITTLE girl</h1>
                    <p>You Know About Me ? </p>
                    <div className={classes.root}>
                        <Button variant="outlined" color="primary" onClick={() => closeWeb()} >Yes</Button>
                        <Button variant="outlined" color="secondary" onClick={event =>  window.location.href='/home'}>No</Button>
                    </div>
                </div>
            </Container>
        </BodyBackgroundColor>
    )
}

export default Welcome
