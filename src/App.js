import { Route, Routes } from "react-router-dom";
import Proxy from "./pages/proxy/Proxy";
import History from "./pages/history/History";
import Payments from "./pages/payment/Payment";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Proxy />}/>
        <Route path="/proxy" element={<Proxy />}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/payments" element={<Payments />}/>
      </Routes>
    </div>
  );
}

export default App;
