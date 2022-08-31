import styled from "styled-components";


export const WritingContainer = styled.div`
    width: 1px;
    height: calc(100% + 120px);
    position: absolute;
    top: 0px;
    left: -44px;
    border-left: 2px dotted var(--colors-gray6);
    min-height: calc(100vh - 120px);
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