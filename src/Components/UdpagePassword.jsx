import React from "react";

export default function ChangePassword() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Profile / <span className="text-white">Change Password</span></h1>

      <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
          />

          <div />

          <input
            type="password"
            placeholder="New Password"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full bg-[#121212] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="text-gray-300 text-sm mb-8">
          <p className="font-medium mb-2">Password Requirements:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Minimum 8 characters long – the more, the better</li>
            <li>At least one lowercase character</li>
            <li>At least one number, symbol, or whitespace character</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-md font-medium">
            Save Changes
          </button>
          <button className="border border-gray-600 text-gray-400 hover:text-white px-6 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
