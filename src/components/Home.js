import React from 'react'
import { Container, Button, Paper, Grid } from '@material-ui/core'
import Mybar from './Mybar'
import Slider from './Slider'
import Profile from './Profile'
import Avatar from '@material-ui/core/Avatar';
import Hasan from '../img/hasan.jpeg'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  
}))

const Home = () => {
    const classes = useStyles();


    return (
        <div >
            <Mybar></Mybar>
            <Profile></Profile>
        </div>
    )
}
export default Home;