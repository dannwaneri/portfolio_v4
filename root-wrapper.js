import React from 'react';
import {AnimatePresence} from 'framer-motion';
import {GlobalStyles} from './src/global.styles';

export const wrapPageElement = ({element}) => (
  <>
 <GlobalStyles/>
  <AnimatePresence mode="wait">{element}</AnimatePresence>
  </>
);

