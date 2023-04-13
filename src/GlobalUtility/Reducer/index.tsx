import { SetTheme } from '../Themes';

export default function GlobalReducer(state: GlobalProps, action: ReducerActions) {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: SetTheme(state),
            };
        default:
            throw Error('Unknown action: ' + action.type);
    }
};
