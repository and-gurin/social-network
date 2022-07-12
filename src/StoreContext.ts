import React from 'react';
import  {StoreType} from "./state/redux-store";

const StoreContext = React.createContext<StoreType | null>(null)
// export const Provider = (props:any) => {
//   return  <StoreContext.Provider value={store}>
//     {props.children}
//   </StoreContext.Provider>
// }

export default StoreContext;
