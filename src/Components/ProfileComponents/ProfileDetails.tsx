const ProfileDetails = () => {
  return (
    <div>
      <div className="overflow-auto h-[100dvh] flex flex-col items-center justify-center p-0 lg:p-4 lg:ml-64">
        <div className="overflow-auto max-w-300 w-full mx-auto bg-white shadow-lg lg:rounded-xl overflow-hidden p-2 lg:p-6 flex flex-col items-center space-y-4">
          <div className="bg-gray-100">
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-4 lg:grid-cols-12 gap-6 px-4">
                <div className="col-span-4 lg:col-span-3">
                  <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                      {/* <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"></img> */}
                      <h3 className="text-xl font-bold text-black">John Doe</h3>
                      <p className="text-gray-700">Software Developer</p>
                      <div className="mt-6 flex flex-wrap gap-4 justify-center text-white">
                        <a href="#" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white">
                          Contact
                        </a>
                        <a href="#" className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded text-white">
                          Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 lg:col-span-9 text-black">
                  <div className="relative bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4 text-black">Personal data</h2>
                    <div className="absolute top-2 right-2 p-2 shadow rounded-full cursor-pointer bg-gray-200 hover:bg-gray-100 transition-all duration-300">
                      {" "}
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                      </svg>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-col">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                      </div>

                      <div className="flex flex-col lg:flex-row lg:gap-4">
                        <div className="flex flex-col w-full lg:w-1/2">
                          <label>Birthdate</label>
                          <input type="text" placeholder="Birthdate" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>

                        <div className="flex flex-col w-full lg:w-1/2 mt-4 lg:mt-0">
                          <label>Nationality</label>
                          <input type="text" placeholder="Nationality" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>
                      </div>

                      <div className="flex flex-col lg:flex-row lg:gap-4">
                        <div className="flex flex-col w-full lg:w-1/2">
                          <label>Gender</label>
                          <input type="text" placeholder="Gender" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>

                        <div className="flex flex-col w-full lg:w-1/2 mt-4 lg:mt-0">
                          <label>Religion</label>
                          <input type="text" placeholder="Religion" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label>Complete Address</label>
                        <input type="text" placeholder="Complete Address" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                      </div>

                      <div className="flex flex-col lg:flex-row lg:gap-4">
                        <div className="flex flex-col w-full lg:w-1/2">
                          <label>Citizenship</label>
                          <input type="text" placeholder="Citizenship" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>

                        <div className="flex flex-col w-full lg:w-1/2 mt-4 lg:mt-0">
                          <label>Civil Status</label>
                          <input type="text" placeholder="Civil Status" readOnly className="border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mt-6 mb-4">Education</h2>
                    <div className="mb-6">
                      <div className="flex justify-between flex-wrap gap-2 w-full">
                        <span className="text-gray-700 font-bold">Senior High</span>
                        <p>
                          <span className="text-gray-700 mr-2">Lorem Ipsum</span>
                          <span className="text-gray-700">2017 - 2019</span>
                        </p>
                      </div>
                      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
