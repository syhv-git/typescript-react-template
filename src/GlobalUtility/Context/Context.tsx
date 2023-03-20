import type { ContextActions, GlobalProps } from '../../types';
import React from 'react';
import { createGlobalState } from 'react-use';

const GlobalActions: ContextActions = {
    ChangeTheme: () => {},
};

const createGlobalProps = createGlobalState<GlobalProps>();

export const GlobalContext = React.createContext(GlobalActions);
