import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router';

 
Enzyme.configure({ adapter: new Adapter() });


describe('Testing en <HeroScreen />', () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    
    test('Debe de mostrar el componente redirect si no hay argumentos en el URL ', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HeroScreen history={ history }/>
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    
    test('Debe mostrar un heroe si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route path="/hero/:heroId" component={ HeroScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.card').exists()).toBe(true);

    });

    test('debe regresar a la pantalla anterior con PUSH', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    })
    

    test('Debe regresar a la pantalla antrerior GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
               <Route
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();
    })
    
    

})
