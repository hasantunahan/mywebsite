import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ins from '../../../assets/icon/instagram.svg'

const useStyles = makeStyles({
    root: {
        minWidth: 175,
        maxWidth:175
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const HomeCard = ({name,link,img}) => {

    const classes = useStyles();
    return (
        <Card 
        style={{margin:8}} spacing={3} className={classes.root}>
            <CardContent>
                <img src={ins} alt={name}/>
                <Typography variant="body2" component="p">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )

}
export default HomeCard;
