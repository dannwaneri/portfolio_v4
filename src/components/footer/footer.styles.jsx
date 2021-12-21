import styled from "styled-components";


export const FooterContainer = styled.footer`
    display: flex;
    align-items: flex-end;
    width: auto;
    height: 70px;
    padding-left: 10px;
    padding-right: 10px;
    position: fixed;
    bottom: -8px;
    background: var(--colors-lowContrast);
    box-shadow: var(--shadows-large);
    backdrop-filter: blur(25px);
    border: 1px solid var(--colors-gray4);
    left: 50%;
    border-radius: 20px;
    z-index: 10;
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
    @media (max-width: 720px) {
    width: calc(100% - 64px);
}
}
`;


export const OptionsContainer = styled.div`
     display: flex;
    align-items: flex-end;
    gap: 8px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    @media (max-width: 720px){
    height: 150px;
    overflow: auto hidden;
}
`;