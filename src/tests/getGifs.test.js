import { shallow } from 'enzyme'
import { getGifs } from  '../helpers/getGifs'

describe('Test Helper getGift', () => {
    test('should get the information required', async () => {

        const categoryName = 'DBZ'
        let result = await getGifs(categoryName)
        expect(result.length).toBe(3)
    })
    
});

