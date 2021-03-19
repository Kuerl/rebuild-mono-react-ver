import React, { useState } from 'react';
import '../css/body.css';
import '../css/handleComponent.css';
import client from '../constants/broker.js';

export const Rolling = (props) => {
    return (
        <div className='__game__roll'>
            <button onClick={
                        () => {
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/dice','1');
                        }
                    }>
                <h1>ROLL HERE!</h1>
            </button>
        </div>
    );
}

export const Input = (props) => {
    const [id, setId] = useState('');
    return(
        <div className='__game__roll'>
            <div className='__game__input'>
                <h3>Enter your choice?</h3>
                <input onChange={(e) => {setId(e.target.value)}}/>
                <button onClick={
                        () => {
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/select',id.toString());
                        }
                        }><h2>Enter!</h2></button>
            </div>
        </div>
    );
}

export const Buy = (props) => {
    return (
        <div className='__game__roll'>
            {console.log(props.data.PIN+'/gameplayM/'+props.data.UserID+'/buy')}
            <div className='__game__buy'>
                    <h2>Enter your choice?</h2>
                    <button onClick={
                        () => {
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/buy','1');
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/jail','1');
                        }
                        }>
                        <h3>Yes!</h3>
                    </button>
                    <button onClick={
                        () => {
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/buy','0');
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/jail','0');
                        }
                    }>
                        <h3>No!</h3>
                    </button>
            </div>
        </div>
    );
}

export const Submit = (props) => {
    return(
        <div className='__game__role'>
            <div className='__game__submit' onClick={
                        () => {
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/chance','1');
                            client.publish(props.data.PIN+'/gameplayM/'+props.data.UserID+'/bus','1');
                        }
                    }>
                    <h2>Submit it!</h2>
                    <button id='submit' >
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