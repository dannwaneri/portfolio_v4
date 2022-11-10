import React from 'react';
import {AnimatePresence} from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles,theme} from './src/global.styles';

export const wrapPageElement = ({element}) => (
  <ThemeProvider theme={theme}>
 <GlobalStyles/>
  <AnimatePresence>{element}</AnimatePresence>
  </ThemeProvider>
);
