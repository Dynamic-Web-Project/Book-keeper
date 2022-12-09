import Loading from "./Loading";
import '../css/signupView.css';
import "../css/common.css";

export default function SignupView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function emailOnChange(event) { props.setEmail(event.target.value) }
    function passwordOnChange(event) { props.setPassword(event.target.value) }
    function confirmPasswordOnChange(event) { props.setConfirmPassword(event.target.value) }

    return (
        <div className="signup-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <div className="blackground-image" />
            <div className="signup">
                <h1>Sign Up</h1>
                <form onSubmit={props.handleSubmit}>
                    {/* Email input field */}
                    <p><input
                        className="inputbox"
                        value={props.email}
                        onChange={emailOnChange}
                        type="email"
                        placeholder="Enter E-mail"
                    /></p>

                    {/* Password input field */}
                    <p><input
                        className="inputbox"
                        value={props.password}
                        onChange={passwordOnChange}
                        type="password"
                        placeholder="Password"
                    /></p>

                    {/* Confirm password input field */}
                    <p><input
                        className="inputbox"
                        value={props.confirmPassword}
                        onChange={confirmPasswordOnChange}
                        type="Confirm password"
                        placeholder="Confirm Password"
                    /></p>

                    {/* Signup-button */}
                    <button class="button" type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
}
