import React from 'react';
import '../css/body.css';
import '../css/routerWaiting.css';
import Loading from '../img/Loading.gif';

const Waiting = () => {
    return (
        <div className='__waiting'>
            <img src={Loading} alt='loading' />
        </div>
    );
}
export default Waiting;