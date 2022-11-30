import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { SignupScreen } from "../views/SignupView";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignupScreenPresenter() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (password !== confirmPassword) {
            setLoading(false);
            setError("Password do not match!");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/');
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
                case 'Firebase: Error (auth/email-already-in-use).':
                    setError('Email is already in use');
                    break;
                default:
                    setError('Unknown Error');
            }
        }
    };

    return <div>
        <SignupScreen email={email}
            setEmail={setEmail}

            password={password}
            setPassword={setPassword}

            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}

            loading={loading}
            setLoading={setLoading}

            error={error}
            setError={setError}

            handleSubmit={handleSubmit}
        />
    </div>
}

export default SignupScreenPresenter;