import { SetTheme } from '../Themes';

export const GlobalReducer = (state: GlobalProps, action: ReducerAction) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: SetTheme(state),
            };
        default:
            return state;
    }
};
