import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../state/messagePageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage

    const sendNewMessage = () => {
        props.dispatch(sendNewMessageActionCreator())
    }
    const updateNewMessageBody = (text) => {
      props.dispatch(updateNewMessageBodyActionCreator(text))
    }

    return (
        <Dialogs updateNewMessageBody={updateNewMessageBody}
                 sendNewMessage={sendNewMessage} messagePage={state}/>
    );
};

export default DialogsContainer;