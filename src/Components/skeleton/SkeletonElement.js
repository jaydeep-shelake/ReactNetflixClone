import React from 'react'
import './skeleton.css';
const SkeletonElement = ({type}) => {
    return (
        <div className={`skeleton ${type}`}>
            
        </div>
    )
}

export default SkeletonElement
