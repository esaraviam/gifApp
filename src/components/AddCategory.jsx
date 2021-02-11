import React ,{ useState }from 'react'

import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const AddCategory = ({categories,  setCategories } ) => {
    
    const [newCategory, setNewCategory] = useState("")

    const addCategory = () => {
        if(newCategory.length > 0 ) {
            setCategories(categories => [...categories, newCategory])
            setNewCategory('');
        }
    }
    const handleText = (e) => setNewCategory(e.target.value);

    const handleSubmit = (e) =>{
        e.preventDefault();
        addCategory();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Category</h3>
            <TextField 
            fullWidth
            onChange={handleText} 
            label="Please Add the cartegory" 
            value={newCategory}/>
            
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory
