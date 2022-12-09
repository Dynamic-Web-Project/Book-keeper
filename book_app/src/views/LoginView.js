import Loading from "./Loading";
import '../css/loginView.css';
import "../css/common.css";
import backgroundimage from '../backgroundimage.jpg';

export default function LoginView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function emailOnChange(event) { props.setEmail(event.target.value) }
    function passwordOnChange(event) { props.setPassword(event.target.value) }

    return (
        <div className="login-wrapper">
            <img className="blackgroundPic"src={backgroundimage} alt="background" />
            <div className="login">
                <h1 className="LoginANDSignup">Login</h1>
                {handleErrorMessage(props.error)}
                {props.loading && <Loading />}
                <form onSubmit={props.handleSubmit}>
                    {/* Email input field */}
                    <p><input className="inputbox"
                        value={props.email}
                        onChange={emailOnChange}
                        type="email"
                        placeholder="Enter email"
                    /></p>

                    {/* Password input field */}
                    <p><input className="inputbox"
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
