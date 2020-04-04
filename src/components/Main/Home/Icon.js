import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Icon = ({ name }) => {

    function Sec() {
        if (name == "Instagram") {
            return <InstagramIcon style={{color : '#FF05E6'}}></InstagramIcon>
        } else if (name == "LinkedIn") {
            return <LinkedInIcon style={{color :'#0526FF'}}></LinkedInIcon>
        } else if (name == "Github") {
            return <GitHubIcon></GitHubIcon>
        } else {
            return null;
        }
    }

    return (
        <div>
            <Sec></Sec>
        </div>
    )
}
export default Icon;