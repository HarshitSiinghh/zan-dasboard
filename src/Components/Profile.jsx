const Profile = () => {
  return (
    <div className="bg-[#1F1F22] rounded-xl p-6 text-white">
   
      <h2 className="text-xl font-semibold mb-6">Profile Details</h2>

      <div className="flex items-center gap-4 mb-8">
        <img
          src="https://i.pravatar.cc/80"
          alt="User"
          className="w-16 h-16 rounded-full border-2 border-gray-700"
        />
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <div>
          <label className="text-sm text-gray-400">First Name</label>
          <input
            type="text"
            defaultValue="John"
            className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>


        <div>
          <label className="text-sm text-gray-400">Last Name</label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">E-mail</label>
          <input
            type="email"
            defaultValue="john.doe@example.com"
            className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Aadhar</label>
          <input
            type="text"
            className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-sm text-gray-400">Phone Number</label>
            <input
              type="text"
              className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div className="w-24">
            <label className="text-sm text-gray-400">Code</label>
            <input
              type="text"
              defaultValue="+1"
              className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400">Address</label>
          <input
            type="text"
            className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">State</label>
          <input
            type="text"
            className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Zip Code</label>
          <input
            type="text"
            className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Country</label>
          <select className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500">
            <option>Select</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-400">Language</label>
          <select className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-400">Timezone</label>
          <select className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500">
            <option>Select Timezone</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-400">Currency</label>
          <select className="w-full mt-1 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500">
            <option>Select Currency</option>
          </select>
        </div>
      </form>

      <div className="flex gap-4 mt-8">
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-medium">
          Save Changes
        </button>
        <button className="border border-gray-600 px-6 py-2 rounded-lg text-gray-400 hover:text-white">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Profile;
