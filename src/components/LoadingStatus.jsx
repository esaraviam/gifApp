import React , {Fragment}from 'react'

import { CircularProgress} from '@material-ui/core';

const LoadingStatus = ({isLoading}) => {
    return (
        <Fragment>
        {isLoading && <CircularProgress  />}
        </Fragment>

    )
}

export default LoadingStatus
