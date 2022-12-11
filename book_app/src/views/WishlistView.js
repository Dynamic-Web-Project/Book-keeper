import Loading from "./Loading";
import { Table, Button } from "react-bootstrap";
import '../css/wishlistView.css';
import "../css/common.css";

export default function WishlistView(props) {
    return (
        <div className="wishlist-wrapper">
            This is a wishlist {props.records}
        </div>
    )
}