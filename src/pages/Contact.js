import React, { useRef } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import emailjs from 'emailjs-com';

function Contact() {
  const formRef = useRef();

  console.log('process', process.env);

  const onFormSend = (ev) => {
    ev.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        ev.target,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        () => {
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
        },
      );
  };

  return (
    <div>
      <Form innerRef={formRef} onSubmit={onFormSend}>
        <FormGroup className="">
          <Input type="text" bsSize="md" name="user_name" placeholder="Your name" />
        </FormGroup>

        <FormGroup className="">
          <Input type="email" bsSize="md" name="user_email" placeholder="Your contact email" />
        </FormGroup>

        <FormGroup className="">
          <Input type="textarea" bsSize="md" name="message" id="message" placeholder="Message" />
        </FormGroup>

        <Button className="btn-primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
