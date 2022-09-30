import { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderState = ({ children }) => {
  const [orders, setOrders] = useState([]);
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderState;
