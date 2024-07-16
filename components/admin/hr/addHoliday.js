import { IoMdCheckmark } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddHoliday = () => {
    return ( 
        <main className="px-4 mt-28 md:mt-4 mx-6 my-4 min-h-[70vh] bg-white rounded-lg">
            <h1 className="text-center text-2xl font-bold text-blue-theme py-4">Holiday</h1>
            <h2 className="py-2 text-blue-theme">Add Holiday</h2>

            <div className="rounded-md bg-[#c2d7e1] px-4 py-2">
                <div className="mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center"> 
                    <div className=" flex flex-col gap-1 w-full sm:w-[45%]">
                        <label htmlFor="date">Date <span className="text-red-500">*</span></label>
                        <input type="date" className="rounded-md px-2 border border-black w-full" required />
                    </div>
                    <div className=" flex flex-col gap-1 w-full sm:w-[45%]">
                        <label htmlFor="occasion">Occasion <span className="text-red-500">*</span></label>
                        <input type="text" className="rounded-md px-2 border border-black w-full" required />
                    </div>

                </div>
                <div className="flex gap-2 items-center mt-14 mb-4 text-[#3d50fc]">
                    <IoMdAddCircleOutline size={20} className="bg-white rounded-full shadow-md shadow-black" />
                    <p>Add</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mx-4 my-6">
                    <button className="text-center text-white bg-blue-600 flex justify-center items-center gap-2 p-2 rounded-md mb-4"><IoMdCheckmark size={20} /> Save</button>
                    <button className="text-center text-black bg-[#c2d7e1] p-2 rounded-md mb-4">Cancel</button>
            </div>

        </main>
     );
}
 
export default AddHoliday;