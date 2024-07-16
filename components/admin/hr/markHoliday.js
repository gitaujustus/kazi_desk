import { IoMdCheckmark } from "react-icons/io";

const MarkHoliday = () => {
    return ( 
        <main className="flex flex-col h-screen w-full">
            <section className="mx-auto w-[90%] sm:w-[75%] md:w-[70%] lg:w-full bg-white rounded-lg mt-36">
                <h1 className="text-2xl text-blue-theme text-center py-4 font-bold">Mark Holiday</h1>
                <h4 className="text-blue-theme text-md px-4 py-2 font-semibold">Mark Days For Default Holidays For The Current Year</h4>

                {/* days */}
                <div className="flex items-center mx-4 my-4 gap-4 flex-wrap">
                    <div className="flex gap-2 items-center" >
                        <input type="checkbox" />
                        <label htmlFor="monday">Monday</label>
                    </div>

                    <div className="flex gap-2 items-center" >
                        <input type="checkbox" />
                        <label htmlFor="tuesday">Tuesday</label>
                    </div>

                    <div className="flex gap-2 items-center" >
                        <input type="checkbox" />
                        <label htmlFor="wednesday">Wednesday</label>
                    </div>

                    <div className="flex gap-2 items-center" >
                        <input type="checkbox" />
                        <label htmlFor="thursday">Thursday</label>
                    </div>

                    <div className="flex gap-2 items-center" >
                        <input type="checkbox" />
                        <label htmlFor="friday">Friday</label>
                    </div>

                    <div className="flex gap-2 items-center" >
                        <input type="checkbox" />
                        <label htmlFor="saturday">Saturday</label>
                    </div>

                    <div className="flex gap-2 items-center" >
                        <input type="checkbox" />
                        <label htmlFor="sunday">Sunday</label>
                    </div>
                </div>

                <p className="px-4 py-1">Occasion</p>
                <input type="text" className="w-[90%] border border-gray-400 rounded-lg mx-4" />

                <div className="flex gap-4 mx-4 my-4">
                    <button className="text-center text-white bg-blue-600 flex justify-center items-center gap-2 p-2 rounded-md"><IoMdCheckmark size={20} /> Save</button>
                    <button className="text-center text-black bg-gray-500 p-2 rounded-md">Cancel</button>
                </div>
            </section>
        </main>
     );
}
 
export default MarkHoliday;