// import { useState } from "react";


// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   const menuItems = [
//     { name: "Dashboard", icon: "📊" },
//     { name: "Profile", icon: "👤" },
//     { name: "Purchase Package", icon: "🛒" },
//     { name: "Fund Manager", icon: "💼" },
//     { name: "Team Member", icon: "👥" },
//     { name: "Financial Report", icon: "📈" },
//     { name: "Wallet", icon: "💰" },
//     { name: "SingOut ", icon: "🚪" },
//   ];

//   return (
//     <>
//       <button
//         onClick={() => setOpen(!open)}
//         className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#19191A] p-2 rounded-lg"
//       >
//         ☰
//       </button>

//       <aside
//         className={`fixed md:static top-0 left-0 h-screen w-64 bg-[#19191A] text-white transform ${
//           open ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300 z-40`}
//       >
//         <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-800">
//           Zanthium
//         </div>

//         <nav className="flex flex-col p-4 space-y-2 ">
//           {menuItems.map((item, index) => (
//             <button
//               key={index}
//               className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white transition"
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span>{item.name}</span>
//             </button>
//           ))}
//         </nav>

       
//       </aside>
//     </>
//   );
// };

// export default Sidebar;




import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/" },
    { name: "Profile", icon: "👤", path: "/profile" },
    { name: "Purchase Package", icon: "🛒", path: "/purchase-package" },
    { name: "Fund Manager", icon: "💼", path: "/fund-manager" },
    { name: "Update/Change password", icon: "📈", path: "/chnage-password" },
    { name: "Wallet", icon: "💰", path: "/wallet" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#19191A] p-2 rounded-lg"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-[#19191A] text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        {/* Logo (Link) */}
        <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-800">
          <Link to="/" className="hover:text-gray-300">
            Zanthium
          </Link>
        </div>

        {/* Menu (NavLink for active state) */}
        <nav className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Sign Out (Link) */}
        <div className="mt-auto p-4 border-t border-gray-800">
          <Link
            to="/login"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition"
          >
            <span className="text-lg">🚪</span>
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
