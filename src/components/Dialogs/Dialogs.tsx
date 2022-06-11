import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";



const Dialogs = (props:DialogsPropsType) => {
    let state = props.messagePage

    const onClickHandler = () => {
        props.sendNewMessage();
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let text = e.currentTarget.value
      props.updateNewMessageBody(text)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {state.dialogsData.map(d=><DialogItem name={d.name} id={d.id}/>)}
                </div>
                <div className={s.messages}>
                    {state.messagesData.map(m=><Message message={m.message}/>)}
                </div>
            </div>
            <div>
                <textarea value={state.newMessageBody}
                          onChange={onChangeHandler}/>
            </div>
            <div><button onClick={onClickHandler}>add message</button></div>

        </div>

    );
};

export default Dialogs;