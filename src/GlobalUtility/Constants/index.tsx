import React from 'react';
import { GetTheme } from '../Themes';

export const SessionProps: GlobalProps = {
    theme: GetTheme(),
};

export const GlobalActions: ContextActions = {
    ChangeTheme: () => {},
};

export const GlobalContext = React.createContext(GlobalActions);
