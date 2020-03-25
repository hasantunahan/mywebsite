import React from 'react'
import { Container, Button, Paper, Grid } from '@material-ui/core'
import Mybar from './Mybar'
import Slider from './Slider'
import Avatar from '@material-ui/core/Avatar';
import Hasan from '../img/hasan.jpeg'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop:55,
    },
    baslik:{
        fontWeight:'bold',
        fontSize : '18px',
        textAlign:'center'
    }

}))

const Profile = () => {
    const classes = useStyles();


    return (
        <div >
            <Container maxWidth="sm">
                <Paper>
                <div className={classes.root}>
                    <Grid justify="center"
                        alignItems="center"
                        container >
                            <Avatar style={{width : 100,height:100}} src={Hasan}></Avatar>
                    </Grid>
        
                </div> 
                </Paper>
            </Container>
                
          
        </div>
    )
}
export default Profile;