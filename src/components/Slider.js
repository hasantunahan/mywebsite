import React from 'react'
import { Slide } from 'react-slideshow-image'
import { Button,Grid,Avatar } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Hasan from '../img/hasan.jpeg'
import img1 from '../img/slider/img1.jpg'
import img2 from '../img/slider/img2.jpg'
import img3 from '../img/slider/img3.jpg'
import './Slide.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const proprietes = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slider = () => {
    const classes = useStyles();
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                        <Button style={{ backgroundColor: 'white ', color: '#000000', marginTop: -100, marginLeft: 20 }} >Hasan</Button>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}
export default Slider;