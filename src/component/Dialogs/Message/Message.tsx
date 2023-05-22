import btn from '../../common/styles/btn.module.css';
import s from './message.module.css'
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {MessagePropsType} from "./MessageContainer";
import EditableSpanPost from "../../common/editableSpan/EditableSpanPost";


export const Message = (props: MessagePropsType) => {

    const [error, setError] = useState<string | null>(null)
    const newTextElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        let el = newTextElement.current ? newTextElement.current.value : '---'
        if (newTextElement.current?.value.trim() !== '') {
            setError('')
        } else {
            setError('Введите текст!!!')
        }
        props.addMessageCB(el)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            addMessage()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = e.currentTarget.value
        props.onChangeHandlerCB(textMessage)
    }

    const elMessages = props.dialogsPage.messages.map(el => {
        const onChangeMessage = (newMessage: string) => {
            props.onChangeMessageCB(newMessage, el.id)
        }
        return (
            // <span key={el.id}>{el.message}</span>
            <EditableSpanPost message={el.message} onChangeMessageCB={onChangeMessage}/>
        )
    })
    return (
        <div>
            <div className={s.message}>
                {elMessages}
            </div>
            <div className={s.wrapAddMessage}>
				<textarea value={props.dialogsPage.messageInInput}
                          onKeyDown={onKeyDownHandler}
                          ref={newTextElement}
                          onChange={onChangeHandler}
                          placeholder={"Enter your message"}
                />
                <div>
                    <button onClick={addMessage} className={btn.btn}>Add message</button>
                </div>
                {error && <span className={s.errorText}>{error}</span>}
            </div>
        </div>
    )
}