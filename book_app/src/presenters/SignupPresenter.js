import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignupView from "../views/SignupView";

export default function Signup() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState(null);

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            setLoading(false);
            setError("Passwords do not match!");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
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
        <SignupView
            email={email}
            setEmail={setEmail}

            password={password}
            setPassword={setPassword}

            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}

            handleSubmit={handleSubmit}

            loading={loading}
            setLoading={setLoading}

            error={error}
            setError={setError}
        />
    </div>
}
