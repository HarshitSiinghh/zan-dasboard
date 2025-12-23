import React from "react";

export default function AddFunds() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Fund Manager / <span className="text-white">Add Funds</span></h1>

      {/* Add Funds Form */}
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
          <label className="block text-sm mb-1 text-gray-300">Fund Need (In ₹) *</label>
          <input
            type="number"
            placeholder="e.g. Fund Need"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Payment Mode *</label>
          <select className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500">
            <option>Select One</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Cash</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Payment Date *</label>
          <input
            type="date"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Payment Slip *</label>
          <input
            type="file"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-2 text-gray-400 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Transaction Id *</label>
          <input
            type="text"
            placeholder="Enter Transaction Id"
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
          Submit
        </button>
      </div>

      {/* Fund Request History */}
      <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Fund Request History ₹</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#121212] text-gray-300 text-sm">
                <th className="border border-gray-700 px-4 py-2 text-left">#</th>
                <th className="border border-gray-700 px-4 py-2 text-left">USERID</th>
                <th className="border border-gray-700 px-4 py-2 text-left">REQUESTED AMOUNT</th>
                <th className="border border-gray-700 px-4 py-2 text-left">REQUEST DATE</th>
                <th className="border border-gray-700 px-4 py-2 text-left">PAYMENT DATE</th>
                <th className="border border-gray-700 px-4 py-2 text-left">PAYMENT MODE</th>
                <th className="border border-gray-700 px-4 py-2 text-left">TRANSACTION ID</th>
                <th className="border border-gray-700 px-4 py-2 text-left">TRANSACTION STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-400 text-sm">
                <td className="border border-gray-700 px-4 py-3" colSpan={8}>
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
