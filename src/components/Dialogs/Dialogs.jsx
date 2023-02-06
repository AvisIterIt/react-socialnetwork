import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm } from "redux-form";
import { createField, Textarea } from "../common/FormsControls/FormsControls";
import { required,maxLengthCreator } from "../../utils/validators/validators";

const maxLength10 =maxLengthCreator(10);

const Dialogs = (props) => {

    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key ={d.id} id={d.id}/>);

    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/>);

    let addNewMessage= (values)=>{
        props.sendMessage(values.newMessageBody);
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div>{dialogsElements}</div>
            </div>
            
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm=(props)=>{
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            {createField('text',"Enter your message",'newMessageBody',Textarea,[required,maxLength10])}
        </div>
        <div><button className={classes.btn}>Send</button></div>
    </form>
)}
const AddMessageFormRedux= reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);
export default Dialogs;