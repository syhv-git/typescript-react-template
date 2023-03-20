import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const err = useRouteError();
    console.error(err);
    return (
        <div>
            <span>Page Not Found</span>
        </div>
    );
};

export { NotFound };
