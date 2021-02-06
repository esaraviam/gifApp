import React from 'react'

const LoadingStatus = ({isLoading}) => {
    return (
        <div className="loading">
            {isLoading && <img src={process.env.PUBLIC_URL + '/loading2.gif' } alt="cargando..." />  } 
        </div>
    )
}

export default LoadingStatus
