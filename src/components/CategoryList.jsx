import React from 'react'
import PropTypes from 'prop-types'
import GifGrid from './GifGrid'

const CategoryList = ({categories}) => {
  
    return (
            <div>
            { 
                categories.map( (category , i )  =>  { 
                    return <GifGrid key={`category_${i  }`} categoryName={category} /> 
                    }).reverse()
            }
            </div>
    )
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default CategoryList
