import Loader from "../components/Loader";
export function HomeList(props) {
    function handleErrorMessage(error) {
        if (error)
            return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>
    }
    return (
        <>
            <h1 className="fs-4">HomeList</h1>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <div>
                <p>HomeList</p>
            </div>
        </>
    );
}