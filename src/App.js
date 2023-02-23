import React, { memo } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import CustermoInput from "./components/customerInput";
// import CustomerWelcome from "./components/customerWelcome";
// import Printer from "./components/Printer";
// import config from "./config/config";
// import XPrinter from "./components/XPrinter";
// import Success from "./components/success/Success";
// import Welcome from "./components/Welcome";
// import Failed from "./components/failed/Failed";
// import { useState } from "react";

import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "./router";
// const pageRouter = {
//   changeRoute: () => {},
// };
// export const PageRouterContext = React.createContext(pageRouter);

// function App() {
//   const [target, setTaget] = useState({ id: "", data: {} });
//   const changeRoute = (route) => {
//     setTaget((target) => ({
//       ...route,
//     }));
//   };

//   let Compoment = null;
//   const setPage = () => {
//     console.log(target);
//     switch (target.id) {
//       case config.pages.home:
//         Compoment = CustomerWelcome;
//         break;
//       case config.pages.printList:
//         Compoment = Printer;
//         break;
//       case config.pages.input:
//         Compoment = CustomerWelcome;
//         break;
//       case config.pages.welcome:
//         Compoment = CustomerWelcome;
//         break;
//       case config.pages.success:
//         Compoment = Success;
//         break;
//       case config.pages.failed:
//         Compoment = Failed;
//         break;
//       default:
//         Compoment = CustermoInput;
//         break;
//     }
//   };

//   setPage();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <PageRouterContext.Provider value={changeRoute}>
//             <Compoment></Compoment>
//           </PageRouterContext.Provider>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

export default memo(function App() {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>;
});
