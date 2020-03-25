import React from 'react'
import { Container,Button } from '@material-ui/core'
import Mybar from './Mybar'
import Background from '../img/backg.png'
import Hasan from '../img/hasan.jpeg'

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${Background})` }}>
            <Container maxWidht="lg">
                <Mybar></Mybar>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                <Button>hasan</Button>
                
                
                <img style={{height:300}}src={Hasan}></img>
              
          



            </Container>
        </div>
    )
}
export default Home;