import React, { useState } from "react";
import { Alert , Button, Form} from 'react-bootstrap';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Loader from '../components/Loader';

function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if(password !== confirmPassword){
            setError("Password do not match!");
            return;
        }
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res)   
        }catch(err){
          setError(err.message);
        }finally{
          setLoading(false);
        }
    };
  return (
    <>
    <h1 className='fs-4'>Sign Up</h1>
    {loading && <Loader />}
    { error && (<Alert variant='danger'> {error} </Alert>
        )
    }
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            type="email" 
            placeholder="Enter email" 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            type="password" 
            placeholder="Password" 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
            value={confirmPassword} 
            onChange={(event) => setConfirmPassword(event.target.value)} 
            type="Confirm password" 
            placeholder="Confirm Password" 
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default SignupScreen;