import React, {ChangeEvent, useState} from 'react';
import s from "../../Profile/Post/post.module.css";

type EditableSpanPostPropsType = {
    message: string
    onChangeMessageCB: (newMessage: string) => void
}


const EditableSpanPost = (props: EditableSpanPostPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [message, setMessage] = useState('')

    const displayEditMode = () => {
        setEditMode(true)
        setMessage(props.message)
    }

    const displayViewMode = () => {
        setEditMode(false)
        props.onChangeMessageCB(message)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }

    return (
        editMode
            ? <input
                value={message}
                onBlur={displayViewMode}
                autoFocus
                onChange={onChangeHandler}
            />
            : <span
                onDoubleClick={displayEditMode}
            >
                {props.message}
        </span>
    )
};

export default EditableSpanPost;