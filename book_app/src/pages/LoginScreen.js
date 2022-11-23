import React, { useState } from "react";
import { Alert , Button, Form} from 'react-bootstrap';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Loader from '../components/Loader';
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history =useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try{
            const res = await signInWithEmailAndPassword(auth, email, password);
            history('/')
        }catch(err){
          setError(err.message);
        }finally{
            setLoading(false);
        }
    };
  return (
    <>
    <h1 className='fs-4'>Login</h1>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default LoginScreen;