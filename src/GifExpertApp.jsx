import React , {Fragment , useState} from 'react'
import AddCategory from './components/AddCategory'
import CategoryList from './components/CategoryList'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Goku' , 'Vegeta' , 'Slam Dunk'])
    return (
        <Fragment>
            <h2>Gif Expert App</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            <CategoryList categories={categories} />
        </Fragment>
    )
}

export default GifExpertApp
