import styled from "styled-components";


export const ProjectName = styled.span`
display: inline-block;
font-weight: 500;
line-height: 28px;
font-size: var(--fontSizes-14);
color: var(--colors-gray12);
font-family: var(--fonts-body);
`;


export const ProjectDes = styled.span`
display: inline-block;
color: var(--colors-gray11);
font-family: var(--fonts-body);
font-weight: 400;
line-height: 28px;
`

export const LinkWrapper = styled.a`
     display: flex;
    align-items: center;
    gap: 12px;
    width: calc(100% + 32px);
    position: relative;
    overflow: hidden;
    padding: 12px;
    margin: -12px;
    border-radius: 12px;
    outline: 0px;

`;

export const ProjectList = styled.ul`
margin-top: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: 28px;
`