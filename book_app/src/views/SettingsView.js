import Loader from "../components/Loader";

export default function SettingsView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    return (
        <div className="settings-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <p><label>TO BE IMPLEMENTED</label></p>
            <p><label>You are logged in as {props.user}.</label></p>
        </div>
    );
}
