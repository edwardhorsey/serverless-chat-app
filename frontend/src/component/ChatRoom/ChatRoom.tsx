import React, { useContext } from "react";
import styles from "./ChatRoom.module.scss";
import { useFormik, FormikErrors } from 'formik';
import Button from "../Button";
import { isContext } from "vm";
import { ChatContext } from "../../context/chatContext";

interface Ivalues {
  name: string;
}

interface IProps {
  // setName: (name: string) => void
}

// const validate = (values: Ivalues) => {
//   let errors: FormikErrors<Ivalues> = { };
//   if (!values.name) errors.name = "Required" 
//   return errors
// };

const ChatRoom: React.FC<IProps> = (props) => {

  const context = useContext(ChatContext);
  const { name, setContext } = context;

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //   },
  //   validate,
  //   onSubmit: values => props.setName(values.name)
  // });

  return (
    <section className={styles.ChatRoom}>
      <Button logic={() => setContext({...context, name: ''})} text="Back" />
        {/* <form>
          <label htmlFor="name"><h1>Set your display name</h1></label>
          <input name="name" placeholder="Your name" onChange={formik.handleChange} />
          <Button logic={formik.handleSubmit} text="Set name" />
          {formik.errors.name ? <div className={styles.formErrors}>{formik.errors.name}</div> : ''}
        </form> */}
      <h2>{name}</h2>
    </section>
  );
};

export default ChatRoom;