import React, {  useState } from 'react';
import '../css/body.css';
import '../css/routerChoice.css';
import CHAR from '../constants/constants.js';
import MonoSmall from '../img/logo/monoLogoSmall.png';
import {Link} from 'react-router-dom';
import Waiting from './routerWaiting';
import client from '../constants/broker';

const Table = (props) => {
    const RenderLabel = (data) => {
        const listItems = data.map((item, id) =>
            <button id='User' onClick={()=>{props.getID.setVisible({active: true, disabled: 'enabled-link', id: item.id.toString()});}}>
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

const ShowChoice = (props) => {
    const [visible, setVisible] = useState({active: false, id: '', disabled: 'disabled-link'});
    client.on("message", (topic, message) => {
        if (message.toString() === '1') setVisible({active: true, disabled: 'disabled-link'});
        client.unsubscribe('onConnect/'+props.PIN.PIN);
        console.log('Successfully Task - Unsub');
    });
    return(visible.active ?
        <div className='__choice'>
        <Table getID = {{visible: visible, setVisible: setVisible}}/>
            <img id='MonoLogo' src={MonoSmall} alt='MonoLogoSmall'/>
            <Link className={visible.disabled} id='StartBtn' to={{pathname: '/Turn', state: {PIN: props.PIN.PIN, UserID: visible.id}}} onClick = {() => {
                console.log(visible);
                client.subscribe(props.PIN.PIN+"/connect/order");
                client.publish(props.PIN.PIN+'/playerid', visible.id);
            }} style={{textDecoration: 'none'}} disabled>STARTING GAME
            </Link>
        </div>
        :
        <div>
            <Waiting />
        </div>
    );
}

const Choice = (props) => {
    return (
        <div>
            <ShowChoice PIN={{PIN: props.location.state.PIN}}/>
        </div>
    );
}

export default Choice;