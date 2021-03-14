import React, { useState } from 'react';
import '../css/body.css';
import '../css/routerChoice.css';
import CHAR from '../constants/constants.js';
import MonoSmall from '../img/logo/monoLogoSmall.png';
import {Link} from 'react-router-dom';
import Waiting from './routerWaiting';
import client from '../constants/broker';

client.subscribe('connect', () => {
    console.log('Connect to Topic for Switch');
});

const Table = (props) => {
    const RenderLabel = (data) => {
        const listItems = data.map((item, id) =>
            <button id='User' onClick={()=>{props.getID.setVisible({active: true, id: item.id});}}>
                <img src={item.charac.default} alt='Character'/>
                <label key={id}>{item.name}</label>
            </button>
        );
        return (
            <nav>{listItems}</nav>
        );
    }
    return (
        <div className='__choice__table'>
            {RenderLabel(CHAR)}
        </div>
    );
}

const ShowChoice = () => {
    const [visible, setVisible] = useState({active: false, id: ''});
    client.on("message", (topic, message) => {
        if (message.toString()==='1') setVisible({active: true});
        client.unsubscribe('connect');
        console.log('Successfully Task - Unsub');
    });
    return(visible.active ?
        <div className='__choice'>
        <Table getID = {{visible: visible, setVisible: setVisible}}/>
            <img id='MonoLogo' src={MonoSmall} alt='MonoLogoSmall'/>
            <button id='StartBtn'><Link to={{pathname: '/Turn'}} onClick = {() => {
                console.log(visible);
            }} style={{textDecoration: 'none', color: 'white'}}>STARTING GAME</Link></button>
        </div>
        :
        <div>
            <Waiting />
        </div>
    );
}

const Choice = () => {
    return (
        <div>
            {ShowChoice()}
        </div>
    );
}

export default Choice;