import {createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`
:root{
-webkit-font-smoothing: antialiased;
--fonts-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
--fonts-serif: Lusitana, serif;
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-7: 56px;
--space-8: 64px;
--space-9: 72px;
--space-10: 80px;
--space-11: 88px;
--fontWeights-400: 400;
--fontWeights-500: 500;
--fontWeights-600: 600;
--fontWeights-700: 700;
--fontWeights-800: 800;
--lineHeights-12: 12px;
--lineHeights-16: 16px;
--lineHeights-20: 20px;
--lineHeights-24: 24px;
--lineHeights-32: 32px;
--lineHeights-40: 40px;
--lineHeights-48: 48px;
--lineHeights-56: 56px;
--fontSizes-10: 10px;
--fontSizes-12: 12px;
--fontSizes-14: 14px;
--fontSizes-16: 16px;
--fontSizes-20: 20px;
--fontSizes-24: 24px;
--fontSizes-32: 32px;
--fontSizes-40: 40px;
--fontSizes-48: 48px;
--radii-1: 4px;
--radii-2: 8px;
--radii-3: 16px;
--radii-round: 50%;
--shadows-small: 0 5px 10px rgba(0, 0, 0, 0.12);
--shadows-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
--shadows-large: 0 30px 60px rgba(0, 0, 0, 0.12);
--transitions-snappy: cubic-bezier(.2, .8, .2, 1);
}

body[data-theme='light']{
    --colors-gray1: hsl(0 0% 99.0%);
--colors-gray2: hsl(0 0% 97.3%);
--colors-gray3: hsl(0 0% 95.1%);
--colors-gray4: hsl(0 0% 93.0%);
--colors-gray5: hsl(0 0% 90.9%);
--colors-gray6: hsl(0 0% 88.7%);
--colors-gray7: hsl(0 0% 85.8%);
--colors-gray8: hsl(0 0% 78.0%);
--colors-gray9: hsl(0 0% 56.1%);
--colors-gray10: hsl(0 0% 52.3%);
--colors-gray11: hsl(0 0% 43.5%);
--colors-gray12: hsl(0 0% 9.0%);
--colors-bg: #FFF;
--colors-lowContrast: #FFFFFF;
--colors-highContrast: black;
--colors-blue1: hsl(206 100% 99.2%);
--colors-blue2: hsl(210 100% 98.0%);
--colors-blue3: hsl(209 100% 96.5%);
--colors-blue4: hsl(210 98.8% 94.0%);
--colors-blue5: hsl(209 95.0% 90.1%);
--colors-blue6: hsl(209 81.2% 84.5%);
--colors-blue7: hsl(208 77.5% 76.9%);
--colors-blue8: hsl(206 81.9% 65.3%);
--colors-blue9: hsl(206 100% 50.0%);
--colors-blue10: hsl(208 100% 47.3%);
--colors-blue11: hsl(211 100% 43.2%);
--colors-blue12: hsl(211 100% 15.0%);
}


body[data-theme='dark']{
    --colors-gray1: hsl(0 0% 8.5%);
    --colors-gray2: hsl(0 0% 11.0%);
    --colors-gray3: hsl(0 0% 13.6%);
    --colors-gray4: hsl(0 0% 15.8%);
    --colors-gray5: hsl(0 0% 17.9%);
    --colors-gray6: hsl(0 0% 20.5%);
    --colors-gray7: hsl(0 0% 24.3%);
    --colors-gray8: hsl(0 0% 31.2%);
    --colors-gray9: hsl(0 0% 43.9%);
    --colors-gray10: hsl(0 0% 49.4%);
    --colors-gray11: hsl(0 0% 62.8%);
    --colors-gray12: hsl(0 0% 93.0%);
    --colors-blue1: hsl(212 35.0% 9.2%);
    --colors-blue2: hsl(216 50.0% 11.8%);
    --colors-blue3: hsl(214 59.4% 15.3%);
    --colors-blue4: hsl(214 65.8% 17.9%);
    --colors-blue5: hsl(213 71.2% 20.2%);
    --colors-blue6: hsl(212 77.4% 23.1%);
    --colors-blue7: hsl(211 85.1% 27.4%);
    --colors-blue8: hsl(211 89.7% 34.1%);
    --colors-blue9: hsl(206 100% 50.0%);
    --colors-blue10: hsl(209 100% 60.6%);
    --colors-blue11: hsl(210 100% 66.1%);
    --colors-blue12: hsl(206 98.0% 95.8%);
    --colors-bg: #000;
    --colors-lowContrast: black;
    --colors-highContrast: white;
}
  
 
*, ::before, ::after {
  box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html{
      scroll-behavior: smooth;
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}
body {
    background: var(--colors-gray1);
    font-family: var(--fonts-sans);
}
hr{
    margin: 0px 4px;
    border: 0px;
    width: 1px;
    height: 48px;
    background: var(--colors-gray4);
    flex-shrink: 0; 
}
svg{
    width: 50%;
    height: 50%;
    pointer-events: none;
    transform-origin: unset !important;
}
button{
    cursor: pointer;
    flex-shrink: 0;
    background-image: linear-gradient( 
45deg, var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-1), var(--gradient-color-2) );
    background-size: 200% 100%;
    border: 0px;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--colors-gray3);
    border-radius: 23%;
    position: relative;
    color: var(--colors-gray10);
    width: 48px;
    height: 48px;
    outline:none;
}
main{
   display: flex;
    flex-direction: column;
    max-width: 720px;
    position: relative;
    min-height: 100vh;
    padding-left: var(--space-2);
    padding-right: var(--space-2);
    padding-top: 120px;
    padding-bottom: 120px;
    margin: 0px auto;
    @media (max-width: 720px){
    padding-top: 40px;
}
}
`;


