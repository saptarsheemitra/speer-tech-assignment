import { Phone, User, Settings } from '@styled-icons/feather';
import { Grid3x3GapFill } from '@styled-icons/bootstrap';
import { DotCircle } from '@styled-icons/fa-regular';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='control-panel-container sticky bottom-0 flex justify-around items-center border-t border-t-[#d3d3d3] bg-white'>
            <div className='phone-container'>
                <Phone 
                    className='phone-icon-container'
                />
            </div>

            <div className='contact-container'>
                <User className='contact-icon-container'/>
            </div>

            <div className='grid-container'>
                <div className='green-container'>
                    <Grid3x3GapFill className='grid-icon-container'/>
                </div>
            </div>

            <div className='settings-container'>
                <Settings className='settings-icon-container'/>
            </div>

            <div className='dot-container'>
                <DotCircle className='dot-icon-container'/>
            </div>
        </div>
    )
}

export default Footer;