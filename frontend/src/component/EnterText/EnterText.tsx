import React, { useContext } from "react";
import styles from "./EnterText.module.scss";
import { useFormik, FormikErrors } from "formik";
import Button from "../Button";
import { ChatContext } from "../../context/chatContext";
import { socket } from "../../socket/socket";

interface Ivalues {
  message: string;
}

const validate = (values: Ivalues) => {
  let errors: FormikErrors<Ivalues> = {};
  if (!values.message) errors.message = "";
  return errors;
};

const EnterText: React.FC = () => {
  const context = useContext(ChatContext);
  const { name } = context;

  const sendMessage = (text: string) => {
    const request = { action: "onMessage", message: { name, message: text } };
    socket.send(JSON.stringify(request));
  };

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validate,
    onSubmit: (values) => {
      sendMessage(values.message);
      formik.resetForm();
    },
  });

  return (
    <section className={styles.EnterText}>
      <form>
        <input
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <Button logic={formik.handleSubmit} text="Send" />
      </form>
    </section>
  );
};

export default EnterText;
