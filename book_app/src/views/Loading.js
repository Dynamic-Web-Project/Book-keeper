import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loader() {
    return (
        <Spinner
            className='loader'
            variant='dark'
            animation="border"
        >
            <span className="visually-hidden"> Loading.. </span>
        </Spinner>
    )
}
