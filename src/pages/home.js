import React from 'react'
import BodyBackgroundColor from 'react-body-backgroundcolor'
import { Container, Grid, makeStyles } from '@material-ui/core';
import '../index.css'

const useStyles = makeStyles(theme => ({
    name: {
      textAlign: 'center',
      fontSize: 30,
    },
  }));

const Home = () => {
    const classes = useStyles();

    return (
        <BodyBackgroundColor backgroundColor='#9881B5'>
             <Container>
                
                <Grid container spacing={2} style={{backgroundColor:"#EEEDF2"}}>
                    <img className="cover" src={process.env.PUBLIC_URL + '/img/cover.jpg'} /> 
                    <Grid item md={12} className={classes.name}> 
                        <p style={{margin:15}}>Narintra Siriwan</p>
                    </Grid>
                    <Grid item md={4} >
                        <div style={{textAlign:"center"}}>
                            <p>Frontend Developer</p>
                            <p>narintra.srw@gmail.com</p>
                            <p>Bangkok,Thailand</p>
                            <i className="material-icons-outlined" style={{padding:10}}>code</i>
                            <i className="material-icons-outlined" style={{padding:10}}>mail_outline</i>
                            <i className="material-icons-outlined" style={{padding:10}}>home</i>
                        </div>                     
                        <hr className="hr-line"></hr>
                    </Grid>
                    <Grid item md={8}>

                    </Grid>
                </Grid>
            </Container>
        </BodyBackgroundColor>
       
    )
}

export default Home
