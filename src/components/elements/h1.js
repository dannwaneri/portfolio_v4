import React from 'react';
import styled from 'styled-components';
import titleStyle from '../../utils/title-style';

const StyledH1 = styled.h1`
letter-spacing: -1px;
line-height: var(--lineHeights-40);
font-size: var(--fontSizes-32);
font-family: var(--fonts-head);
font-weight: 600 !important;
color: var(--colors-gray12);
margin:0
`;

const H1 = ({children}) => <StyledH1>{titleStyle(children)}</StyledH1>;

export default H1;