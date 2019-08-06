import React from 'react';

import Tilt from 'react-tilt';
import Brain from '..//img/brain.png';
import '../css/logo.css';


const Logo = () => {
    return (
        <div className='logo ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img style={{ paddingTop: '5px' }} src={Brain} alt='logo' /> </div>
            </Tilt>

        </div>



    )
}


export default Logo;