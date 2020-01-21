import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className="jumbotron">
            <FontAwesomeIcon icon={faEnvelopeSquare} /> : rehemfoundation123@gmail.com<br/>
            <FontAwesomeIcon icon={faMobileAlt} /> : +91 7452089172
        </div>


    );
}

export default Contact ;
