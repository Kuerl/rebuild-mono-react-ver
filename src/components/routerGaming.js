import React from 'react';
import '../css/body.css';
import '../css/routerGaming.css';

const Rolling = () => {
    return (
        <div class='__game__roll'>
            <button>
                <h1>ROLL HERE!</h1>
            </button>
        </div>
    );
}

const YourChar = () => {
    return (
        <div className='__game__Char'>
            <div className='__game__Char__container' id='imgContainer'>
                <img alt='Character'/>
            </div>
            <div className='__game__Char__container'>
                <h1>THINGS</h1>
            </div>
        </div>
    );
}

const Gaming = () => {
    return (
        <div className='__game'>
            <YourChar />
            <Rolling />
        </div>
    );
}

export default Gaming;