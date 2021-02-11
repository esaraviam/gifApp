import GifGridItem from '../components/GifGridItem'
import React from 'react'
import { shallow } from 'enzyme'

describe('Test GifGridItem Component', () => {
            const title = 'Test'
            const url = 'https://media3.giphy.com/'
            const wrapper = shallow( < GifGridItem title = { title }
                url = { url }
                / > )
                test('should load the component Propperly', () => {

                    expect(wrapper).toMatchSnapshot()
                }) 
                
                test('should load the title properly', () => {

                    const p = wrapper.find('p')


                    expect(p.text().trim()).toBe('Test')
                }) 
                
                test('should load image', () => {

                    const img = wrapper.find('img')
                    const source = img.prop('src')
                    const alt = img.prop('alt')

                    expect(source).toBe(url)
                    expect(alt).toBe(title)
                })

                {/* test('should have the class animate__fadeInLeft' , () => {
                    const div = wrapper.find('div')
                    
                    expect(div.hasClass('animate__fadeInLeft')).toBe(true)
                    

                }) */}



            })