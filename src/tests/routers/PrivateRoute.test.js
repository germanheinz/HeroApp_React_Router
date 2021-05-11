import { React } from "react";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from '../../components/routers/PrivateRoute';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas en <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();
    
    test('Debe mostrar el componente si está auntenticado y guardar localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={ () => <span>hola</span>}
                    {...props }
                />
            </MemoryRouter>

        );
        console.log(wrapper.html());

        expect( wrapper.find('span').exists() ).toBe(true);
        expect( localStorage.setItem).toHaveBeenCalledWith('lastPath', props.location.pathname);

        
        
    })
    
})
