import React from 'react';
import '../css/body.css';
import '../css/handleComponent.css';

export const Rolling = () => {
    return (
        <div className='__game__roll'>
            <button>
                <h1>ROLL HERE!</h1>
            </button>
        </div>
    );
}

export const Input = () => {
    return(
        <div className='__game__roll'>
            <div className='__game__input'>
                <h3>Enter your choice?</h3>
                <input />
                <button><h2>Enter!</h2></button>
            </div>
        </div>
    );
}

export const Buy = () => {
    return (
        <div className='__game__roll'>
            <div className='__game__buy'>
                    <h2>Enter your choice?</h2>
                    <button>
                        <h3>Yes!</h3>
                    </button>
                    <button>
                        <h3>No!</h3>
                    </button>
            </div>
        </div>
    );
}

export const Submit = () => {
    return(
        <div className='__game__role'>
            <div className='__game__submit'>
                    <h2>Submit it!</h2>
                    <button id='submit'>
                        <h3>I got it!</h3>
                    </button>
            </div>
        </div>
    );
}

export const Warning = () => {
    return(
        <div className='__game__role'>
            <div className='__game__warn'>
                <h3>Stop please!</h3>
                <h3>Someone is moving!</h3>
            </div>
        </div>
    );
}