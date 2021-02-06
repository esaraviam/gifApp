import {useEffect, useState} from 'react'
import {getGifs} from "../helpers/getGifs"
export const useFetchCategory = (category) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    })  
    useEffect(() => {
        getGifs(category)
            .then(fetchedData => {
                setState({data: fetchedData, loading: false})
            })
            .catch(err => {
                setState({loading: false , data: []})
            })

    } , [category])
    
    
    return state; 
}