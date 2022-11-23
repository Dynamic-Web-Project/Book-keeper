import React, { useState } from "react";
import { Alert , Button, Form} from 'react-bootstrap';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
<<<<<<< HEAD
import Loader from "../components/Loader"
import {useNavigate} from "react-router-dom"
=======
import Loader from '../components/Loader';
import { useNavigate } from "react-router-dom";
>>>>>>> 93cc8b4435a32a353373f168865a39f834a4e1af

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
<<<<<<< HEAD
    const [loading,setloading] = useState(false);
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setloading(true);
=======
    const [loading, setLoading] = useState(false);
    const history =useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
>>>>>>> 93cc8b4435a32a353373f168865a39f834a4e1af

        try{
            const res = await signInWithEmailAndPassword(auth, email, password);
            history('/')
        }catch(err){
          setError(err.message);
        }finally{
<<<<<<< HEAD
            setloading(false);
=======
            setLoading(false);
>>>>>>> 93cc8b4435a32a353373f168865a39f834a4e1af
        }
    };
  return (
    <>
    <h1 className='fs-4'>Login</h1>
<<<<<<< HEAD
    {loading && <Loader/>}
    {error && <Alert variant='danger'>{error}</Alert>}
=======
    {loading && <Loader />}
    { error && (<Alert variant='danger'> {error} </Alert>
        )
    }
>>>>>>> 93cc8b4435a32a353373f168865a39f834a4e1af
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