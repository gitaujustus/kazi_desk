import React from "react";

function Levi() {
  return (
    <main>
      <section class="bg-gray-200 min-h-[70vh] p-4 md:p-20">
        <div class="flex flex-row items-center gap-4 w-full border border-gray-500 p-4 rounded-lg">
          <div class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full bg-slate-300 border border-gray-700 overflow-hidden">
            <img
              src="/api/placeholder/96/96"
              class="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <div class="w-full">
            <div class="flex gap-4 mb-2">
              <p class="bg-gray-300 px-2 rounded-md uppercase">John Doe</p>
              <p class="bg-green-100 text-green-600 rounded-md uppercase px-2">
                Completed
              </p>
            </div>
            <div class="flex flex-row w-full justify-between">
              <div class="mb-2 sm:mb-0">
                <p class="text-gray-500 uppercase">14 Feb 2024</p>
                <p class="text-2xl uppercase font-semibold">Nairobi</p>
              </div>
              <div>
                <p class="text-gray-500 uppercase">14 Feb 2024</p>
                <p class="text-2xl uppercase font-semibold">Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Levi;
