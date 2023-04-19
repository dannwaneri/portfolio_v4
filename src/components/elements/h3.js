import React from 'react';
import styled from 'styled-components';
import titleStyle from '../../utils/title-style';

const StyledH3 = styled.h3`
font-size: var(--fontSizes-20);
font-weight: 600;
line-height: 28px;
color: var(--colors-gray12);
font-family: var(--fonts-body);
`;

const createId = (text) => text.toLowerCase().replace(/ /g, '-');

const H3 = ({children}) => <StyledH3 id={createId(children)}>{titleStyle(children)}</StyledH3>;

export default H3;