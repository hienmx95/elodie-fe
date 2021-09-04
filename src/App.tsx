import React, { Reducer } from 'react';
import {
  renderRoutes,
  RouteConfig,
  RouteConfigComponentProps,
} from 'react-router-config';
import { Switch, useLocation, withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';


export interface AppProps extends RouteConfigComponentProps {
  routes: RouteConfig[];
}

export interface AppTheme {
  type: ThemeEnums;
  mainBackground?: string; // class
  navBackground?: string; // class
  footerBackground?: string; // class
  color?: string; // hex color
}

export interface AppState {
  isNavMobileOpen?: boolean;
  themes?: AppTheme[];
}

export enum AppEnum {
  TOGGLE_MOBILE_MENU,
}

export interface AppAction {
  type: AppEnum;
  payload: AppState;
}

export function AppReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case AppEnum.TOGGLE_MOBILE_MENU: {
      return {
        ...state,
        isNavMobileOpen: !state.isNavMobileOpen,
      };
    }

    default: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
}

export enum ThemeEnums {
  DEFAULT,
  DARK,
  LIGHT,
  TRANSPARENT,
  PDFVIEWER,
}

const themes: AppTheme[] = [
  {
    type: ThemeEnums.DEFAULT,
    mainBackground: 'bg-white',
    navBackground: 'bg-gradient',
    footerBackground: 'bg-footer',
    color: '#ffffff',
  },
  {
    type: ThemeEnums.DARK,
    navBackground: 'dark:bg-dark-theme',
    mainBackground: 'dark:bg-dark-theme',
    footerBackground: 'dark:bg-dark-theme',
    color: '#ffffff',
  },
  {
    type: ThemeEnums.LIGHT,
    navBackground: 'bg-gradient',
    mainBackground: 'bg-white',
    footerBackground: 'bg-footer',
    color: '#ffffff',
  },
  {
    type: ThemeEnums.TRANSPARENT,
    navBackground: 'bg-transparent',
    mainBackground: 'bg-transparent',
    footerBackground: 'bg-transparent',
    color: '#ffffff',
  },
  {
    type: ThemeEnums.PDFVIEWER,
    navBackground: 'bg-transparent',
    mainBackground: 'bg-transparent',
    footerBackground: 'bg-transparent',
    color: '#ffffff',
  },
];

export const AppContext = React.createContext<any[]>([]);

const App = (props: AppProps) => {
  const { routes } = props;

  const [state, dispatch] = React.useReducer<Reducer<AppState, AppAction>>(
    AppReducer,
    {
      isNavMobileOpen: false,
      themes,
    },
  );

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <Switch>{renderRoutes(routes)}</Switch>
    </AppContext.Provider>
  );
};

export default withRouter(App);
