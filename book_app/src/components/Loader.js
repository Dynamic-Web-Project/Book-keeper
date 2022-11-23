<<<<<<< HEAD
import React from 'react';
import {Spinner} from 'react-bootstrap';

export default function Loader({variant, className}) {

    return (
        <Spinner className={className} variant={variant} animation="border">
         <span className="visually-hidden"> Loading.. </span>
        </Spinner>
    );
  
}

Loader.defaultProps = {
    variant: 'dark',
    className: ''
=======
import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function Loader({variant, className}){
    return(
        <Spinner className = {className} variant = {variant} animation = "border">
            <span className = "visually-hidden"> Loading...</span>
        </Spinner>
    )
}
Loader.defaultProps = {
    variant: 'dark',
    className: '',
    
>>>>>>> 93cc8b4435a32a353373f168865a39f834a4e1af
}