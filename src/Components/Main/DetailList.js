import React from 'react'

const DetailList = ({className,h1,h3,url}) => {
    return (
        <div className={className}>
            <div className="text">
                <h1>{h1}</h1>
                <h3>{h3}</h3>
                </div>
                <div className="img">
                   <img src={url} alt="tv"/>
                </div>
        </div>
    )
}

export default DetailList
