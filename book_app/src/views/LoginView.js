import Loader from "../components/Loader";

export default function LoginView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function emailOnChange(event) { props.setEmail(event.target.value) }
    function passwordOnChange(event) { props.setPassword(event.target.value) }

    return (
        <>
            <h1 className="fs-4">Login</h1>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <form onSubmit={props.handleSubmit}>
                {/* Email input field */}
                <p><label>Email</label></p>
                <p><input
                    value={props.email}
                    onChange={emailOnChange}
                    type="email"
                    placeholder="Enter email"
                /></p>

                {/* Password input field */}
                <p><label>Password</label></p>
                <p><input
                    value={props.password}
                    onChange={passwordOnChange}
                    type="password"
                    placeholder="Password"
                /></p>

                {/* Login-button */}
                <button class="button" type="submit">Submit</button>
            </form>
        </>
    );
}
