import React ,{ useState }from 'react'
import PropTypes from 'prop-types'

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
            <input type="Text" onChange={handleText} value={newCategory} />
            {/* <button onClick={addCategory}> Add </button> */}
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory
