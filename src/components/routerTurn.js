/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react';
import '../css/body.css';
import '../css/routerTurn.css';
import MonoSmall from '../img/logo/monoLogoSmall.png';
import {Link} from 'react-router-dom';
import Waiting from './routerWaiting.js';
import client from '../constants/broker.js'


const Label = (props) => {
    const [turn, setVisible] = useState({id: '?.', disable: {pointerEvents: 'none'}});
    client.on("message", (topic, message) => {
        if (topic === props.PIN.PIN+'/turn') {
            setVisible({id: message.toString()});
        }
        client.unsubscribe(props.PIN.PIN+'/turn');
        console.log('Successfully Task - Unsub');
    });
    return (
        <div class='__turn__card__Link'>
                {/* <Link id='turn-label' to='/Gaming' style={turn.disable}>
                    <label id={turn.label}>Kuerl</label>
                </Link> */}
                <Link id='turn-label' to='/Gaming' style={turn.disable}>
                    <label>Your turn: <p>{turn.id}</p></label>
                </Link>
        </div>
    );
}

const Turn = (props) => {
    const [turnDisplay, setTurnDisplay] = useState(false);
    useEffect(
        () => {
            client.subscribe(props.location.state.PIN+'/ready', () => {
                console.log('Connect to Topic for goto Turn');
            });
            client.subscribe(props.location.state.PIN+'/turn', () => {
                console.log('Connect to Topic for checking Turn');
            });
        }
    );
    const ShowTurnComponent = () => {
        client.on("message", (topic, message) => {
            if (topic === props.location.state.PIN+'/ready' & message.toString() === '1') setTurnDisplay(true);;
        });
        return ( turnDisplay ?
            <div>
                <img id='imgMono' src={MonoSmall} alt='MonoLogo'/>
                <div className='__turn__card'>
                    <Label PIN={{PIN: props.location.state.PIN}} />
                </div>
            </div>
            :
            <Waiting/>
        );
    }
    return (
        <div className='__turn'>
            <ShowTurnComponent />
        </div>
    );
}

export default Turn;