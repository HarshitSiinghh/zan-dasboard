// import Navbar from "./Components/Navbar";
// import Sidebar from "./Components/Sidebar";
// import Dashboard from "./Components/Dashboard";
// import Profile from "./Components/Profile";
// import PurchasePackage from "./Components/Purchase-package";
// import AddFunds from "./Components/FundManager";
// import { Routes, Route } from "react-router-dom";
// import ChangePassword from "./Components/UdpagePassword";
// import Withdraw from "./Components/Wallet";
// import { SignIn } from "./Login";

// function App() {
//   return (
//     <div className="min-h-screen bg-[#19191A]">

//       <div className="fixed top-0 left-0 right-0 z-50">
//         <Navbar />
//       </div>

//       <div className="flex pt-16">

//         <Sidebar />

//         <main className="flex-1 p-6 md:ml-14">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/purchase-package" element={<PurchasePackage />} />
//             <Route path="/fund-manager" element={<AddFunds />} />
//             <Route path="/chnage-password" element={<ChangePassword />} />
//             <Route path="/wallet" element={<Withdraw />} />
//             <Route path="/login" element={<SignIn />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import MainLayout from "./Components/Mainlayout";
import Profile from "./Components/Profile";
import PurchasePackage from "./Components/Purchase-package";
import AddFunds from "./Components/FundManager";
import ChangePassword from "./Components/UdpagePassword";
import Withdraw from "./Components/Wallet";
import { SignIn } from "./Components/Login";

function App() {
  return (
    <Routes>
      {/* 🔓 Public Route (NO navbar/sidebar) */}
      <Route path="/login" element={<SignIn />} />

      {/* 🔒 Protected Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/purchase-package" element={<PurchasePackage />} />
        <Route path="/fund-manager" element={<AddFunds />} />
        <Route path="/chnage-password" element={<ChangePassword />} />
        <Route path="/wallet" element={<Withdraw />} />
      </Route>
    </Routes>
  );
}

export default App;
