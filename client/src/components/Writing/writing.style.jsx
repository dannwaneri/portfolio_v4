import styled from "styled-components";


export const WritingContainer = styled.div`
    width: 1px;
    position: absolute;
    top: 0px;
    left: -44px;
    height: calc(100% + 120px);
    border-left: 2px dotted var(--colors-gray6);
    @media (max-width: 720px){
    display: none;
}
`

export const WritingPosition = styled.div`
    position: relative;
`


export const ProjectName = styled.span`
display: inline-block;
font-weight: 500;
line-height: 28px;
font-size: var(--fontSizes-14);
color: var(--colors-gray12);
font-family: var(--fonts-body);
`;

export const WritingHeading = styled.h1`
    margin-bottom: 8px;
    user-select: none;
    letter-spacing: -1px;
    line-height: var(--lineHeights-40);
    font-size: var(--fontSizes-32);
    font-family: var(--fonts-head);
    font-weight: 600 !important;
    color: var(--colors-gray12);

`


export const WritingTitle = styled.p`
border-bottom: 2px dotted var(--colors-gray6);
    padding-bottom: 24px;
    margin-bottom: 24px;
    color: var(--colors-gray11);
    font-size: 15px;
    font-family: var(--fonts-body);
    font-weight: 400;
    line-height: 28px;
`


export const BlogList = styled.a`
    width: calc(100% + 48px);
    position: relative;
    border-radius: 12px;
    cursor: pointer;
    padding: 20px;
    margin: 0px -20px -20px -20px;
    transition: background 150ms ease;
    -webkit-tap-highlight-color: transparent;
    outline: 0;
`


export const BlogHeader = styled.header`

`

export const BlogTitle = styled.h3`
font-size: var(--fontSizes-20);
font-weight: 500;
line-height: 28px;
color: var(--colors-gray12);
font-family: var(--fonts-body);
`

export const BlogDes = styled.p`
    margin-top: 4px;
    font-size: var(--fontSizes-14);
    color: var(--colors-gray11);
    line-height: 28px;
    font-weight: 400;
    font-family: var(--fonts-body);
`

export const Load = styled.div`
color: var(--colors-gray12);
` 