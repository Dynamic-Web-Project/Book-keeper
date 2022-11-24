import React, { useState } from "react";
import { Alert , Button, Form} from 'react-bootstrap';
import Loader from "../components/Loader"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
//test
function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading,setloading] = useState(false);
    const history = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setloading(true);

        try{
            await login(email, password);
            history('/')
        }catch(err){
          setError(err.message);
        }finally{
            setloading(false);
        }
    };
  return (
    <>
    <h1 className='fs-4'>Login</h1>
    {loading && <Loader/>}
    {error && <Alert variant='danger'>{error}</Alert>}
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