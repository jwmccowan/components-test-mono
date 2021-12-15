import { Theme } from '@mui/material';
import MuiThemeProvider from '@mui/system/ThemeProvider';
import * as React from 'react';
import darkTheme from '../theme/dark';
import lightTheme from '../theme/light';
import { ThemeProviderProps } from './ThemeProvider.types';
import { Themes } from './themes.enum';

const themeMap: Record<Themes, Theme> = {
  [Themes.dark]: darkTheme,
  [Themes.light]: lightTheme,
};

function ThemeProvider(props: ThemeProviderProps): JSX.Element {
  return (
    <MuiThemeProvider theme={themeMap[props.theme]}>
      {props.children}
    </MuiThemeProvider>
  );
}
ThemeProvider.themes = Themes;

export default ThemeProvider;
