import React from 'react';
import Form, { Field, useForm } from 'rc-field-form';
import Input from './components/Input';

export default () => {
  const [form] = useForm();
  console.log(form);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        event.stopPropagation();
        form
          .validateFields()
          .then(values => {
            console.log(values);
          }) // Do nothing about submit catch
          .catch(e => console.log(e));
      }}
    >
      <Form component={false} form={form}>
        <Field name="username" initialValue="zhangsan" rules={[{
          message: 'username is error',
          validator() {
            console.log('arguments');
            console.log(arguments);
          }
        }]}>
          <Input placeholder="Username" />
        </Field>
        <Field name="password">
          <Input placeholder="Password" />
        </Field>
      </Form>
      <button type="submit">submit</button>
    </form>
  );
};
