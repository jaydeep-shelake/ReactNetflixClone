import React from 'react'
import SkeletonElement from '../SkeletonElement';
const RowSkeleton = () => {
    return (
        <div className="rowSkeleton">
            <SkeletonElement type="thumbnail"/>
            <div className="flexText">
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            </div>
            </div>
    )
}

export default RowSkeleton
