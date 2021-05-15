import { DashboardRoutes } from "../../components/routers/DashboardRoutes"
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AuthContext } from "../../components/auth/AuthContext";
import { MemoryRouter } from "react-router";
 
Enzyme.configure({ adapter: new Adapter() });

describe('Testing en <DashboardRoutess />', () => {
    
    test('debe mostrarse correctamente', () => {

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
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        console.log(wrapper.html())
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toBe('german');


    })
})
