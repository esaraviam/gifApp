import React  , {Fragment} from 'react'
import PropTypes from 'prop-types'

import GifGridItem from './GifGridItem'
import LoadingStatus from './LoadingStatus'

import {useFetchCategory} from '../hooks/useFetchCategory'

const GifGrid = ({categoryName}) => {
    const { data:images , loading } = useFetchCategory(categoryName)
    return (
        <Fragment>
            <h4 className="animate__animated animate__bounce">{categoryName}   </h4>
          
            <LoadingStatus isLoading={loading}/>
            <div className="card-grid">
                {images.map(img => <GifGridItem  key={img.id} {...img} />)}
                
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    categoryName: PropTypes.string.isRequired
}

export default GifGrid
