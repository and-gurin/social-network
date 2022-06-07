import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageBodyActionCreator} from "../../state/messagePageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) =>{
                    let state = store.getState().messagePage

                    const sendNewMessage = () => {
                        store.dispatch(sendNewMessageActionCreator())
                    }
                    const updateNewMessageBody = (text) => {
                        store.dispatch(updateNewMessageBodyActionCreator(text))
                    }

                    return <Dialogs updateNewMessageBody={updateNewMessageBody}
                             sendNewMessage={sendNewMessage} messagePage={state}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;