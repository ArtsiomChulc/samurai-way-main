import btn from '../../common/styles/btn.module.css';
import s from './message.module.css'
import React from "react";
import {MessagePropsType} from "./MessageContainer";
import EditableSpanPost from "../../common/editableSpan/EditableSpanPost";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthTC, minLengthTC, required} from "../../../utils/validators/validatorsForReduxForm";
import {Textarea} from "../../common/formControls/FormControl";

const maxLength15 = maxLengthTC(15)
const minLength15 = minLengthTC(2)

export const Message = (props: MessagePropsType) => {

    // const [error, setError] = useState<string | null>(null)
    // const newTextElement = React.createRef<HTMLTextAreaElement>()
    //
    // const addMessage = () => {
    //     let el = newTextElement.current ? newTextElement.current.value : '---'
    //     if (newTextElement.current?.value.trim() !== '') {
    //         setError('')
    //     } else {
    //         setError('Введите текст!!!')
    //     }
    //     props.addMessageCB(el)
    // }
    //
    // const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === "Enter") {
    //         addMessage()
    //     }
    // }
    //
    // const onChangeHandler = (formData: MessageType) => {
    //     let textMessage = formData.newMessage
    //     props.onChangeHandlerCB(textMessage)
    // }

    const elMessages = props.dialogsPage.messages.map(el => {
        const onChangeMessage = (newMessage: string) => {
            props.onChangeMessageCB(newMessage, el.id)
        }
        return (
            // <span key={el.id}>{el.message}</span>
            <EditableSpanPost message={el.message} onChangeMessageCB={onChangeMessage}/>
        )
    })

    const onSubmit = (formData: MessageType) => {
        props.addMessageCB(formData.newMessage)
    }

    return (
        <div>
            <div className={s.message}>
                {elMessages}
            </div>
            <div className={s.wrapAddMessage}>
				<MessageReduxForm onSubmit = {onSubmit}/>
                {/*{error && <span className={s.errorText}>{error}</span>}*/}
            </div>
        </div>
    )
}


type MessageType = {
    newMessage: string
}

const MessageForm = (props: InjectedFormProps<MessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/*<textarea value={props.dialogsPage.messageInInput}*/}
            {/*          onKeyDown={onKeyDownHandler}*/}
            {/*          ref={newTextElement}*/}
            {/*          onChange={onChangeHandler}*/}
            {/*          placeholder={"Enter your message"}*/}
            {/*/>*/}
            <Field component = {Textarea}
                   name = 'newMessage'
                   placeholder = "Enter your message"
                   validate={[required, maxLength15, minLength15]}
            />
            <div>
                <button className={btn.btn}>Add message</button>
            </div>
        </form>
    );
};

const MessageReduxForm = reduxForm<MessageType>({form: 'messageForm'})(MessageForm)

export default Message;