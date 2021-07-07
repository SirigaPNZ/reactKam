import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.mess}</div>
    )
}



const Dialogs = (props) =>{

    let dialogsData = [
        {id: 1, name: 'Siriga'},
        {id: 2, name: 'Diman'},
        {id: 3, name: 'Den4ik'},
        {id: 4, name: 'Sasha'}
    ]

    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
    ]

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>
            <div className={s.dialogsMessages}>
                <Message mess={messageData[0].message} id={messageData[0].id}/>
                <Message mess={messageData[1].message} id={messageData[1].id}/>
                <Message mess={messageData[2].message} id={messageData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs;