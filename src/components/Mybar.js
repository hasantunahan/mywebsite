import React from 'react'
import {
  Grid, Toolbar, Paper, IconButton, AppBar
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Avatar } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import history from '../history';
import BeyazImza from '../img/beyazimza.png'
import Hasan from '../img/hasan.jpeg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  butons: {
    marginLeft: 8,
    color: '#FFFFFF',
    fontFamily: 'Segoe UI'
  },
  icons: {
    color: '#FFFFFF'
  },
  bar: {
    backgroundColor: '#313132',
    height: '45px',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 40,

  }
}))

const Mybar = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <AppBar className={classes.bar} position="fixed" >
        <Toolbar className={classes.root}>
          <Button onClick={() => history.push('/blog')} size="small" className={classes.butons} >Blog</Button>
          <Button onClick={() => history.push('/iletisim')} size="small" className={classes.butons} >Iletişim</Button>
          <Grid
            justify="center"
            alignItems="center"
            container>
            <img onClick={() => history.push('/')} className={classes.logo} src={BeyazImza} alt="not found"></img>
            <Grid >
            </Grid>
          </Grid>
          <Button onClick={() => history.push('/login')} size="small" className={classes.butons} >Giriş</Button>
          <Button onClick={() => history.push('/signup')} size="small" className={classes.butons} >KayıtOl</Button>
        </Toolbar>
      </AppBar> */}
      <nav style={{ backgroundColor: '#313132' }} class="navbar navbar-expand-lg navbar-dark  ">
        <img onClick={() => history.push('/')} className={classes.logo} src={BeyazImza} alt="not found"></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Button onClick={() => history.push('/blog')} size="small" className={classes.butons} >Blog</Button>
            </li>
            <li class="nav-item">
              <Button onClick={() => history.push('/cv')} size="small" className={classes.butons} >CV</Button>
            </li>
            <li class="nav-item">
              <Button onClick={() => history.push('/iletisim')} size="small" className={classes.butons} >Iletişim</Button>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <Button onClick={() => history.push('/login')} size="small" className={classes.butons} >Giriş</Button>
            <Button onClick={() => history.push('/signup')} size="small" className={classes.butons} >KayıtOl</Button>
          </form>
        </div>
      </nav>
    </div>
  )
}
export default Mybar