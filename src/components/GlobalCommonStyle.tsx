// const GlobalCommonStyle: React.FC = ({ children }) => {
//   return (
//     <div className="page-layout">
//       {children}
//       <style jsx global>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             border: 0;
//             font-size: 100%;
//             font: inherit;
//             vertical-align: baseline;
//             box-sizing: border-box;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

import { createGlobalStyle } from "styled-components";

const GlobalCommonStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
`;

export default GlobalCommonStyle;
