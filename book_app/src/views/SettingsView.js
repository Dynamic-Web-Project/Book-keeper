import Loading from "./Loading";

export default function SettingsView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    // function renderResults(props) {
    //     function renderTable(item) {
    //         console.log(JSON.parse(item));
    //     }

    //     return (
    //         // <span>
    //         //     <p>query: {JSON.stringify(resultsArray.results[0].query)}</p>
    //         //     <p>results/offers: {JSON.stringify(resultsArray.results[0].content.offers)}</p>
    //         // </span>

    //         <table>
    //                 <thead></thead>
    //                 <tbody>
    //                     {/* {JSON.stringify(props.response[0]).map(renderTable)} */}
    //                 </tbody>
    //         </table>
    //     )
    // }

    return (
        <div className="settings-wrapper">
            <h1 className='fs-4'>Settings</h1>
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <p><label>Your UID is: {props.user.uid}.</label></p>
            {/* <button onClick={props.buttonClicked}>button</button> */}
            {/* <div><p>{renderResults(props)}</p></div> */}
        </div>
    );
}
