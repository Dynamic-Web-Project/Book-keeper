import Loader from "../components/Loader";

export default function SettingsView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    return (
        <>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <div>
                TO BE ADDED
            </div>
        </>
    );
}
