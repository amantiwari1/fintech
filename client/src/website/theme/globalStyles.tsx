import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
   ${tw`dark:(text-white) bg-gradient-to-r from-blue-400 md:via-pink-500 to-purple-400 dark:(from-gray-700 md:via-gray-600 to-gray-600)  `}

  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;