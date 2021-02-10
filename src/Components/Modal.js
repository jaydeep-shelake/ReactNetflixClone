import React from 'react'

const Modal = ({trialer}) => {
    return (
        <div className="trailer">
            <div className="inner">
            <iframe title="trailer" src={`https://www.youtube.com/embed/${trialer[0]?.key || trialer[1]?.key || trialer[2]?.key}?autoplay=1`} frameborder="0"></iframe>  
            </div>
        </div>
    )
}

export default Modal;
