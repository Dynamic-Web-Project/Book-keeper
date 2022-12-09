import Loading from "./Loading";
import '../css/loginView.css';
import "../css/common.css";

export default function LoginView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function emailOnChange(event) { props.setEmail(event.target.value) }
    function passwordOnChange(event) { props.setPassword(event.target.value) }

    return (
        <div className="login-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <div className="blackground-image" />
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={props.handleSubmit}>
                    {/* Email input field */}
                    <p><input
                        className="inputbox"
                        value={props.email}
                        onChange={emailOnChange}
                        type="email"
                        placeholder="Enter email"
                    /></p>

                    {/* Password input field */}
                    <p><input
                        className="inputbox"
                        value={props.password}
                        onChange={passwordOnChange}
                        type="password"
                        placeholder="Password"
                    /></p>

                    {/* Login-button */}
                    <button class="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
