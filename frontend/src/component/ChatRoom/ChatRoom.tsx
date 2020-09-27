import React, { useContext } from "react";
import styles from "./ChatRoom.module.scss";
import { useFormik, FormikErrors, Formik } from 'formik';
import Button from "../Button";
import { ChatContext } from "../../context/chatContext";
import { socket } from "../../socket/socket";
import ChatWindow from "../ChatWindow";

interface Ivalues {
  message: string;
}

interface IProps {
}

const validate = (values: Ivalues) => {
  let errors: FormikErrors<Ivalues> = { };
  if (!values.message) errors.message = "Required" 
  return errors
};

const ChatRoom: React.FC<IProps> = () => {

  const context = useContext(ChatContext);
  const { name, setContext, chatMessages } = context;

  const sendMessage = (text: string) => {
    const request = { "action": "onMessage", "message": { name, message: text } };
    console.log('sending', request)
    socket.send(JSON.stringify(request));
  }

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validate,
    onSubmit: values => {
      sendMessage(values.message);
      formik.resetForm();
    }
  });

  return (
    <section className={styles.ChatRoom}>
      <Button logic={() => setContext({...context, name: ''})} text="Back" />
      <h3>{name}</h3>
      <ChatWindow chat={chatMessages}/>
      <form>
        <input name="message" value={formik.values.message} onChange={formik.handleChange} />
        <Button logic={formik.handleSubmit} text="Send" />
        {formik.errors.message ? <div className={styles.formErrors}>{formik.errors.message}</div> : ''}
      </form>
      
    </section>
  );
};

export default ChatRoom;