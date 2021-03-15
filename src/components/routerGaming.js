import React from 'react';
import '../css/body.css';
import '../css/routerGaming.css';
import CHAR from '../constants/constants.js';

const Rolling = () => {
    return (
        <div className='__game__roll'>
            <button>
                <h1>ROLL HERE!</h1>
            </button>
        </div>
    );
}

const YourChar = (props) => {
    return (
        <div className='__game__Char'>
            <div className='__game__Char__container' id='imgContainer'>
                {console.log(CHAR[props.data-1].charac)}
                <img src={CHAR[props.data].charac.default} alt='Character'/>
            </div>
            <div className='__game__Char__container'>
                <h1>THINGS</h1>
            </div>
        </div>
    );
}

const Gaming = (props) => {
    return (
        <div className='__game'>
            <YourChar data={props.location.state.UserID}/>
            <Rolling />
        </div>
    );
}

export default Gaming;