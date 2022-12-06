import Loading from "./Loading";

export default function SettingsView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function renderResults(props) {
        // arr.map(func1).map(func2)
        return (
            props.response.map(
                function funcName(item) {
                    return (
                        item.name
                    )
                }
            )
        )
    }

    return (
        <div className="settings-wrapper">
            <h1 className='fs-4'>Settings</h1>
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <p><label>Your UID is: {props.user.uid}.</label></p>
            {/* <button onClick={props.buttonClicked}>button</button> */}
            <div><p>{renderResults(props)}</p></div>
        </div>
    );
}
