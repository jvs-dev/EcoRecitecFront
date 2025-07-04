import { createGlobalStyle, keyframes } from "styled-components";

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #00ab7b; /* bg-green-800 */
    --secondary-color: #dcfce7; /* bg-green-200 */
    --text-color: #1f2937; /* text-gray-900 */
    --border-color: #e5e7eb; /* border-gray-300 */
    --hover-bg-color: #f9fafb; /* bg-gray-100 */
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #f9fafb; /* Cor de fundo global */
  }
`;
