import React from "react";

export default function Withdraw() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Wallets / <span className="text-white">Withdrawl</span></h1>

      <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 w-full max-w-xl mb-12">
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">UserId</label>
          <input
            type="text"
            placeholder="e.g. john12345"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Income Wallet</label>
          <input
            type="text"
            disabled
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 text-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Withdraw Amount ( In ₹ ) *</label>
          <input
            type="number"
            placeholder="Enter Withdraw Amount"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-300">Transaction Password *</label>
          <input
            type="password"
            placeholder="e.g. Transaction Password"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-md font-medium">
          Withdraw
        </button>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Withdraw Report</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#121212] text-gray-300 text-sm">
                <th className="border border-gray-700 px-4 py-2 text-left">#</th>
                <th className="border border-gray-700 px-4 py-2 text-left">USER ID</th>
                <th className="border border-gray-700 px-4 py-2 text-left">AMOUNT</th>
                <th className="border border-gray-700 px-4 py-2 text-left">WITHDRAW CHARGE</th>
                <th className="border border-gray-700 px-4 py-2 text-left">NET AMOUNT</th>
                <th className="border border-gray-700 px-4 py-2 text-left">ORDER ID</th>
                <th className="border border-gray-700 px-4 py-2 text-left">DATE</th>
                <th className="border border-gray-700 px-4 py-2 text-left">PAYOUT DATE</th>
                <th className="border border-gray-700 px-4 py-2 text-left">WITHDRAW STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-400 text-sm">
                <td className="border border-gray-700 px-4 py-3" colSpan={9}>
                  No records found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
