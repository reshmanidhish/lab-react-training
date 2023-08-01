import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour'
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    if(email.includes('@') && email.includes('.')) {
        setEmailValidation(true)  
    } else {
        setEmailValidation(false)  
    }
    setEmail(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value
    if(password.length<6) {
        setPasswordValidation(true)  
    } else {
        setPasswordValidation(false)  
    }
    setEmail(email);
  };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the form from doing its default behavior
    //const _id = uuidv4(); // generate a new id
  };

  return (
 

    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', textAlign: 'left' }}
    >
      <Card style={{ width: '400px' }}>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input valid={emailValidation}  onChange={handleEmailChange}/>
              <FormFeedback valid={emailValidation}>You typed a valid email</FormFeedback>
              {/* <FormText>Example help text that remains unchanged.</FormText> */}
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input invalid={passwordValidation} onChange={handlePasswordChange} />
              <FormFeedback invalid={passwordValidation}>Your password is too weak</FormFeedback>
              {/* <FormText>Example help text that remains unchanged.</FormText> */}
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Nationality</Label>
              <Input id="exampleSelect" name="nationality" type="select"  onChange={handleNationalityChange}>
                <option value="en">England</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
              </Input>
            </FormGroup>

            <Button>Sign in</Button>

            <p>
            {greetings[nationality]}
            </p>
            <p>
                Your email address is {email}
                </p>
                <p>
                your email address is correct
            </p>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
export default SignUpPage;
