import React from 'react';
import '../css/body.css';
import '../css/routerGaming.css';
import CHAR from '../constants/constants.js';
import {Rolling, Buy, Submit, Input, Warning} from './handleComponent.js';
import client from '../constants/broker.js'

const YourChar = (props) => {
    return (
        <div className='__game__Char'>
            <div className='__game__Char__container' id='imgContainer'>
                <img src={CHAR[props.data-1].charac.default} alt='Character'/>
            </div>
            <div className='__game__Char__container'>
                <h1>{CHAR[props.data-1].name}</h1>
            </div>
        </div>
    );
}

const Gaming = (props) => {
    return (
        <div className='__game'>
            {/* <Rolling />
            <Submit />
            <Buy />
            <Input /> */}
            <Warning />
            <YourChar data={props.location.state.UserID}/>
        </div>
    );
}

export default Gaming;