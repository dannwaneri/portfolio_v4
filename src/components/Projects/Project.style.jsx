import styled from "styled-components";


export const SpanTag = styled.span`
display: inline-block;
font-weight: 500;
line-height: 28px;
font-size: var(--fontSizes-14);
color: var(--colors-gray12);
font-family: var(--fonts-body);
`;

export const HeadTag = styled.h1`
    margin-bottom: 8px;
    user-select: none;
    letter-spacing: -1px;
    line-height: var(--lineHeights-40);
    font-size: var(--fontSizes-32);
    font-family: var(--fonts-head);
    font-weight: 600 !important;
    color: var(--colors-gray12);

`


export const ParagraphStyle = styled.p`
border-bottom: 2px dotted var(--colors-gray6);
    padding-bottom: 24px;
    margin-bottom: 24px;
    color: var(--colors-gray11);
    font-size: 15px;
    font-family: var(--fonts-body);
    font-weight: 400;
    line-height: 28px;
`

export const SpanStyle = styled.span`
display: inline-block;
color: var(--colors-gray11);
font-family: var(--fonts-body);
font-weight: 400;
line-height: 28px;
@media (max-width: 720px){
    display: none;
}
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

export const UlStyle = styled.ul`
margin-top: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const Load = styled.div`
color: var(--colors-gray12);
` 

export const DottedLine = styled.div`
border-top: 2px dotted var(--colors-gray6);
    flex: 1 1 0%;

`

export const DateWrapper = styled.p`
color: var(--colors-gray9);
line-height: 28px;
font-size: var(--fontSizes-14);
font-family: var(--fonts-mono);
margin:0
`