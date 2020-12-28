import React from 'react';

import { Link } from 'react-router-dom';

const DetailsPage = (props) => {

    return (
        <div>
            <h1>{props.info.title}</h1>
            <Link to='/'> home </Link>
        </div>
    )
}

export default DetailsPage;