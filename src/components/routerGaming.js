import React, { useEffect, useState } from 'react';
import '../css/body.css';
import '../css/routerGaming.css';
import CHAR from '../constants/constants.js';
import {Rolling, Buy, Submit, Input, Warning} from './handleComponent.js';
import client from '../constants/broker.js';
// import Waiting from './routerWaiting.js';

const YourChar = (props) => {
    return (
        <div className='__game__Char'>
            <div className='__game__Char__container' UserID='imgContainer'>
                <img src={CHAR[props.data-1].charac.default} alt='Character'/>
            </div>
            <div className='__game__Char__container'>
                <h1>{CHAR[props.data-1].name}</h1>
            </div>
        </div>
    );
}

const Gaming = (props) => {
  const [caseNum, setCaseNum] = useState(-1);

  function caseComponent() {
    client.on("message", (topic, message) => {
      if(topic === props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/buy") {
        console.log(topic === props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/buy");
        setCaseNum(1);
      }
      if(topic === props.location.state.PIN + "/gameplayP/turn" && message.toString() !== props.location.state.UserID) {
        console.log('Turn');
        setCaseNum(0);
      }
       if(topic === props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/jail") {
        setCaseNum(3);
      }
       if(topic === props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/chance") {
        setCaseNum(2);
      }
       if(topic === props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/bus") {
        setCaseNum(5);
      }
       if(topic === props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/select") {
        setCaseNum(4);
      }
       if(topic === props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/dice") {
        setCaseNum(6);
      }
    });
  }

    useEffect(
        () => {
              client.subscribe(props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/buy", function (err) {
                if (!err) {
                }
              });
              client.subscribe(props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/chance", function (err) {
                if (!err) {
                }
              });
              client.subscribe(props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/select", function (err) {
                if (!err) {
                }
              });
              client.subscribe(props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/bus", function (err) {
                if (!err) {
                }
              });
              client.subscribe(props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/lose", function (err) {
                if (!err) {
                }
              });
              client.subscribe(props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/select", function (err) {
                if (!err) {
                }
              });
              client.subscribe(props.location.state.PIN + "/gameplayP/" + props.location.state.UserID + "/jail", function (err) {
                if (!err) {
                }
              });
              client.subscribe(props.location.state.PIN + "/gameplayP/turn", function (err) {
                if (!err) {
                }
              });
        }
    );
    return (
        <div className='__game'>
            {
              caseNum === 0 ?
              <Warning data={{PIN: props.location.state.PIN, UserID: props.location.state.UserID}}/> : 
              caseNum === 1 ?
              <Buy data={{PIN: props.location.state.PIN, UserID: props.location.state.UserID}} /> :
              caseNum === 2 || caseNum === 3 || caseNum === 5 ?
              <Submit data={{PIN: props.location.state.PIN, UserID: props.location.state.UserID}} /> :
              caseNum === 4 ?
              <Input data={{PIN: props.location.state.PIN, UserID: props.location.state.UserID}} /> :
              caseNum === 6 ?
              <Rolling data={{PIN: props.location.state.PIN, UserID: props.location.state.UserID}} /> :
              null
            }
            <YourChar data={props.location.state.UserID}/>
        </div>
    );
}

export default Gaming;