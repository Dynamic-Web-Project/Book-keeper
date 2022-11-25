import Loader from "../components/Loader";
export function LoginScreen(props) {
    function handleErrorMessage(error) {
        if (error)
            return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>
    }
    return (
        <>
            <h1 className="fs-4">Login</h1>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <form onSubmit={props.handleSubmit}>
                <p><label>Email</label></p>
                <p><input
                    value={props.email}
                    onChange={(event) => props.setEmail(event.target.value)}
                    type="email"
                    placeholder="Enter email"
                /></p>

                <p><label>Password</label></p>
                <p><input
                    value={props.password}
                    onChange={(event) => props.setPassword(event.target.value)}
                    type="password"
                    placeholder="Password"
                /></p>

                <button class="button" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}

