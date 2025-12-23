const Dashboard = () => {
  const statsData = [
    { title: "In Active", icon: "🔔", value: "$2,138.87" },
    { title: "Total Investment", icon: "💳", value: "$2,138.87" },
    { title: "Total Earning", icon: "🎁", value: "$2,138.87" },
    { title: "Income Wallet", icon: "🛡️", value: "$2,138.87" },
    { title: "Purchase Wallet", icon: "👛", value: "$2,138.87" },
    { title: "Total Withdrawl", icon: "💸", value: "$2,138.87" },
    { title: "Daily Self Income", icon: "🌗", value: "$2,138.87" },
    { title: "Level Income", icon: "🚀", value: "$2,138.87" },
    { title: "Daily Team Income", icon: "🏦", value: "$2,138.87" },
    { title: "Total Refferal", icon: "🔗", value: "$2,138.87" },
    { title: "Total Team", icon: "🎯", value: "$2,138.87" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="relative bg-[##3F3F43FF] rounded-xl py-10 p-6 min-h-120px shadow-lg border-t-2 border-orange-500"
        >
          {/* Header */}
          <div className="flex items-center gap-3  text-gray-300 mb-4">
            <span className="text-2xl">{item.icon}</span>
            <p className="text-2xl font-thin">{item.title}</p>
          </div>

          {/* Value */}
          <p className="text-xl font-thin text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
