import React from "react";
import styles from "./SetName.module.scss";
import { useFormik, FormikErrors } from "formik";
import Button from "../Button";

interface Ivalues {
  name: string;
}

interface IProps {
  setName: (name: string) => void;
}

const validate = (values: Ivalues) => {
  let errors: FormikErrors<Ivalues> = {};
  if (!values.name) errors.name = "*Required";
  if (values.name.length > 24) errors.name = "*Too many chars";
  return errors;
};

const SetName: React.FC<IProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validate,
    onSubmit: (values) => props.setName(values.name),
  });

  return (
    <section className={styles.SetName}>
      <form>
        <label htmlFor="name">
          <h2>What's your name?</h2>
        </label>
        <input
          name="name"
          placeholder="Your name"
          onChange={formik.handleChange}
        />
        <div>
          <Button logic={formik.handleSubmit} text="Join chat" />
          {formik.errors.name && (
            <div className={styles.formErrors}>{formik.errors.name}</div>
          )}
        </div>
      </form>
    </section>
  );
};

export default SetName;
