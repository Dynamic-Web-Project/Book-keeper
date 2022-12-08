import Loading from "./Loading";
import '../css/settingsView.css';

export default function SettingsView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    return (
        <div className="settings-wrapper">
            <h1 className='fs-4'>Settings</h1>
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <p><label>Your UID is: {props.user.uid}.</label></p>
        </div>
    );
}
