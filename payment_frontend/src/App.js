import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./paymentSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
}

export default App;
