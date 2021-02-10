import React from 'react';
import './Banner.css';
const Banner = ({children}) => {
   
    return (
        <div className="banner">
            {children}
        </div>
    )
}

export default Banner
