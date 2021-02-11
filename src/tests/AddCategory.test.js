import '@testing-library/jest-dom'
import TextField from '@material-ui/core/TextField'
import AddCategory from '../components/AddCategory'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

describe('Check Add category component', () => {
    const setCategories = jest.fn()
    let wrapper = shallow( < AddCategory setCategories={setCategories}/ > )

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( < AddCategory setCategories={setCategories}/ > )
    })


    test('should load Add category properly', () => {
        const snapshot = toJson(wrapper)
        expect(snapshot).toMatchSnapshot();
    })

    test('should input a new category', () => {
       
        const input = wrapper.find('h3')
        console.log(input.html())
        //input.simulate('change' , {target: {value: 'Hola Mundo'}})
    })

    test('Should not post if the input is empty', () => {
        const form = wrapper.find('form')
        form.simulate('submit' , { preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled()
        
    });
    
    




});