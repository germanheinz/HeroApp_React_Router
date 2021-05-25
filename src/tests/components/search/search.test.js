import '@testing-library/jest-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <SearchScreen />', () => {

    test('Debe mostrarse con los valores por defecto ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        console.log(wrapper.html())
        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    })

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');



    })
    
})
