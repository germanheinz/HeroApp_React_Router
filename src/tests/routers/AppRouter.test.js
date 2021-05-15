
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AppRouter } from '../../components/routers/AppRouter';
import { AuthContext } from '../../components/auth/AuthContext';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    
    test('debe mostrar login si no esta autenticado', () => {
        
        

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )


        // console.log(wrapper.html() );

        expect( wrapper ).toMatchSnapshot();


    })

    test('debe mostrar componente marvel si está autenticado', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'german'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper.find('.navbar').exists()).toBe(true);

    })
    
    

})