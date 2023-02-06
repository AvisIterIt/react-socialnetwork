import React from "react";
import { Field } from "redux-form";
import classes from "./FormsControls.module.css";

const FormControl = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
export const createField = (
  type,
  placeholder,
  name,
  component,
  validators,
  props = {},
  text = ""
) => (
  <div>
    <Field
      type={type}
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props}
    />
    {text}
  </div>
);
