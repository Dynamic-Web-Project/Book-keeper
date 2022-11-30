import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoginScreen } from "../views/LoginView";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setError("");
            navigate('/')
        } catch (error) {
            setLoading(false);
            switch (error.message) {
                case 'Firebase: Error (auth/internal-error).':
                    setError('Please enter a valid Email and Password');
                    break;
                case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                    setError('Password needs to be atleast 6 characters long');
                    break;
                case 'Firebase: Error (auth/invalid-email).':
                    setError('Please enter a valid Email');
                    break;
                case "Firebase: Error (auth/missing-email).":
                    setError('Please enter a valid Email');
                    break;
                case 'Firebase: Error (auth/user-not-found).':
                    setError('This account does not exist');
                    break;
                case 'Firebase: Error (auth/wrong-password).':
                    setError('Wrong Email or Password');
                    break;
                default:
                    setError('Unknown Error');
            }
        }
    };

    return (
        <div>
            <LoginScreen
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}
                errorMessage={setError}
                handleSubmit={handleSubmit}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    )
}