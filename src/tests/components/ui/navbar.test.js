import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter, Router } from 'react-router';

import { types } from '../../../components/types/types';
import { AuthContext } from '../../../components/auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import '@testing-library/jest-dom';

 
Enzyme.configure({ adapter: new Adapter() });

describe('Testing <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'german'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

   

    afterEach(() => {
        jest.clearAllMocks();
    })
    
    test('debe de mostrarme correctamente el nombre en el navbar', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('german');

    })

    test('Debe de llamar el logout y el usar history', () => {

        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ 
            payload: { name: '' },
            type: types.logout 
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
        
    })
    
})
