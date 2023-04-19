import React from 'react';
import styled from 'styled-components';
import titleStyle from '../../utils/title-style';

const StyledH2 = styled.h2`
margin-top: 8px;
border-bottom: 2px dotted var(--colors-gray6);
padding-bottom: 24px;
margin-bottom: 24px;
color: var(--colors-gray11);
font-size: 15px;
font-weight: 400;
font-family: var(--fonts-body);
line-height: 28px;
`;



const createId = (text) => text.toLowerCase().replace(/ /g, '-');

const H2 = ({children}) => <StyledH2 id={createId(children)}>{titleStyle(children)}</StyledH2>;

export default H2;