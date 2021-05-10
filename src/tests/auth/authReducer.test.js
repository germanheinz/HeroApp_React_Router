import { authReducer } from "../../components/auth/authReducer";
import { types } from "../../components/types/types";

describe('Test in authReducer', () => {

    test(' Debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false}, {})
        expect(state).toEqual({logged: false});
    })

    test('Debe de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login, 
            payload: {
                name: 'German'
            }
        }
        
        const state = authReducer({ logged: false}, action);
        expect(state).toEqual({
            logged: true,
            name: 'German'
        });
    });

    test('Debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.logout, 
            payload: {
                name: ''
            }
        }
        
        const state = authReducer({ logged: false}, action);
        expect(state).toEqual({
            logged: false,
            name: ''
        });
    });
})