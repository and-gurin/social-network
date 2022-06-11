import React from 'react';
import {
    MessagePageType,
    sendNewMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../state/messagePageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {Dispatch} from "redux";

/*const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {

                (store) =>{
                   if (store){
                       let state = store.getState()

                       const sendNewMessage = () => {
                           store.dispatch(sendNewMessageActionCreator())
                       }
                       const updateNewMessageBody = (text:string) => {
                           store.dispatch(updateNewMessageBodyActionCreator(text))
                       }

                    return <Dialogs updateNewMessageBody={updateNewMessageBody}
                             sendNewMessage={sendNewMessage} messagePage={state.messagePage}/>
                   }
                }
            }
        </StoreContext.Consumer>
    );
};*/

type mapStatePropsType = {
    messagePage: MessagePageType
}
type mapDispatchPropsType = {
    sendNewMessage: () => void
    updateNewMessageBody: (text:string) => void
}
export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType;

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        messagePage: state.messagePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        updateNewMessageBody: (text: string)=>{
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        sendNewMessage: ()=>{
            dispatch(sendNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;