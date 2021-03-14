/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../css/body.css';
import '../css/routerTurn.css';
import MonoSmall from '../img/logo/monoLogoSmall.png';
import {Link} from 'react-router-dom';
import Waiting from './routerWaiting.js';
import client from '../constants/broker.js'

const Label = (props) => {
    return (
        <div className='__turn__card__Link'>
            <Link to='/Gaming' style={{textDecoration: 'none'}}>
                <label>{props.data.visible.data}</label>
            </Link>
            <button onClick={console.log('Kuerl')}>HJKDHJKLSD</button>
        </div>
    );
}

const Turn = (props) => {
    const [visible, setVisible] = useState({active: false, data: ''});
    client.on("message", (topic, message) => {
        if (message.toString() === '1') setVisible({active: true, data: 'Your turn will be displayed here!'});
        client.unsubscribe('connect');
        console.log('Successfully Task - Unsub');
    });
    return (
        <div className='__turn'>
            <img src={MonoSmall} alt='MonoLogo'/>
            <div className='__turn__card' onClick={
                console.log(props)
            }>
                <Label data={{visible: visible}}/>
            </div>
        </div>
    );
}

export default Turn;