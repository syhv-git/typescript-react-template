import { SetTheme } from '../Themes';

export const GlobalReducer = (state: GlobalProps, action: string) => {
    switch (action) {
        case 'SET_MODE':
            return {
                ...state,
                theme: SetTheme(state),
            };
        default:
            return { ...state };
    }
};
