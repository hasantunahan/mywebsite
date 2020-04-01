import React from 'react'
import { Container, Button, Paper, Grid, Typography, Card, CardContent } from '@material-ui/core'
import Mybar from './Mybar'
import Slider from './Slider'
import Avatar from '@material-ui/core/Avatar';
import Hasan from '../img/hasan.jpeg'
import firebase from '../firebase'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import cozum from '../img/logo.jpg'
import tbb from '../img/tbblogo.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    baslik: {
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    roots: {
        flexGrow: 1,
        marginTop: 10,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 120,
        height: 70
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },

}))

const Profile = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [deneme, setDeneme] = React.useState([]);


    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("deneme").get()
            setDeneme(data.docs.map(doc => doc.data()))
            console.log(data);

        }
        fetchData()

    }, [])

    return (
        <div >


            <Container maxWidth="sm">
                <Paper elevation={0}>
                    <div className={classes.root}>
                        <br></br>
                        <br></br>
                        <br></br>

                        <Grid justify="center"
                            alignItems="center"
                            container >
                            <Avatar style={{ width: 100, height: 100 }} src={Hasan}></Avatar>
                        </Grid>
                        <br></br>
                        <div style={{ textAlign: 'center' }}>--Deneyim--</div>
                        <Card className={classes.roots}>
                            <CardContent>
                                <CardMedia
                                    className={classes.cover}
                                    image={tbb}
                                />
                                <Typography className={classes.pos} color="textSecondary" gutterBottom>
                                    Stajyer Bilgisayar Mühendisi(2 ay)
                            </Typography>
                                <Typography variant="body2" component="p">
                                    Ankara, Türkiye
                            <br />
                                </Typography>

                            </CardContent>
                        </Card>
                        <Card className={classes.roots}>
                            <CardContent>
                                <CardMedia
                                    className={classes.cover}
                                    image={cozum}
                                />
                                <Typography className={classes.pos} color="textSecondary" gutterBottom>
                                    Soru Çözümü , Birebir Eğitim  Etüt Öğretmeni (5 yıl)
                            </Typography>
                                <Typography variant="body2" component="p">
                                    Ankara, Türkiye
                            <br />
                                </Typography>

                            </CardContent>

                        </Card>

                    </div>
                    <br></br>

                </Paper>
                {/* <ul>
                    {
                        deneme.map(a => (
                            <li>
                                {a.name}
                            </li>
                        ))
                    }
                </ul> */}

            </Container>



        </div>
    )
}
export default Profile;