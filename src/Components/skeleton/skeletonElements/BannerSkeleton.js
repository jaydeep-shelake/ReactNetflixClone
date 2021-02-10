import React from 'react'
import SkeletonElement from '../SkeletonElement';
const BannerSkeleton = () => {
    return (
        <div className="skeletonBanner">
            <SkeletonElement type="title"/>
            <SkeletonElement type="button"/><SkeletonElement type="button"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
    )
}

export default BannerSkeleton
