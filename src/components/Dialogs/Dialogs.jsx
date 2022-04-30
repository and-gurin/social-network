import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(d=><DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesData.map(m=><Message message={m.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;