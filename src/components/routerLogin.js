import React, { useEffect, useState } from 'react';
import logo from '../img/IoTLogo.jpg';
import '../css/body.css';
import '../css/routerLogin.css';
import IU from '../img/logo/IULogo.png';
import IoT from '../img/logo/IoTLogoWhite.png';
import Mono from '../img/logo/MonoLogo.png';
import client from '../constants/broker.js';

import {Link} from 'react-router-dom';

const Waiting = () => {
    return (
        <div>
            <img src={logo} alt='IoT Logo'/>
        </div>
    );
}

const Root = () => {
    const [PIN, setPIN] = useState('');
    useEffect(
        () => {
            const timer = setTimeout(
                () => {
                    document.getElementById('Waiting').style.display = 'none';
                    document.getElementById('Login').style.display = 'block';
                }
            ,2000);
            return () => clearTimeout(timer);
        }
    );
    return (
        <div>
            <div id='Waiting' style={{display: 'block'}}><Waiting /></div>
            <div id='Login' style={{display: 'none'}}>
            <div className="__login__back">
                <div className='__login__logo_container'>
                    <img src={IU} className='__login__logo' alt='IU'/>
                    <img src={IoT} className='__login__logo' alt='IoT'/>
                </div>
                <div className='__login__input'>
                    <img src={Mono} alt='MonoLogo'/>
                    <input placeholder='Input Your PIN?' value={PIN} onChange={(e) => {setPIN(e.target.value);}}/>
                    <button><Link to={{pathname: '/Choice', state: {PIN: PIN}}} style={{textDecoration: 'none'}} onClick={() => {
                            console.log('Send the pin to MQTT Broker');
                                client.publish('onConnect', PIN);
                                console.log('\tSent PIN to the broker');
                            console.log('Going to choice bar');
                        }}>ENTER ROOM</Link></button>
                </div>
                <div className='footer'></div>
            </div>
            </div>
        </div>
    );
}

export default Root;