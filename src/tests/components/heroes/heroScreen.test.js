import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';

 
Enzyme.configure({ adapter: new Adapter() });


describe('Testing en <HeroScreen />', () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter>
            <HeroScreen history={ history }/>
        </MemoryRouter>
    );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL ', () => {
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    

})
