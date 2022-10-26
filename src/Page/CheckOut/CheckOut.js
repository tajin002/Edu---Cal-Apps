import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>This is checkOut page</h2>
        </div>
    );
};

export default CheckOut;