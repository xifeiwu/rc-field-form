import React from 'react';
import Form, { Field } from 'rc-field-form';
import Input from './components/Input';

let x = 0;
const { useForm } = Form;
export default function Demo() {
  const [form] = useForm();
  return (
    <Form form={form}>
      <Field dependencies={['field_1']}>
        {() => {
          console.log(arguments);
          x += 1;
          return `gogogo${x}`;
        }}
      </Field>
      <Field name="field_1">
        <Input />
      </Field>
      <Field name="field_2">
        <Input />
      </Field>
      <Field name={['prop', 'format']}>
        <Input />
      </Field>
      <div style={{
        display: 'inline-block',
        padding: '5px 8px',
        border: '1px solid gray',
        cursor: 'pointer',
      }} onClick={evt => {
        console.log(form.getFieldsValue());
      }}>submit</div>
    </Form>
  );
}
