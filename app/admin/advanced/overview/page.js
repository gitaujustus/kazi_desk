import Link from "next/link";
const Overview = () => {
    return ( 
        <main>
            <section className="bg-[#c7c7c7] flex flex-col">
                {/* Navigation pills */}
                <div className="flex m-2 gap-4">
                    <Link href="#" className="w-28 rounded-full bg-white text-blue-theme border-blue-theme border-2 px-2 py-1 text-center">Overview</Link>
                    <Link href="#" className="w-28 rounded-full bg-white text-blue-theme border-blue-theme border-2 px-2 py-1 text-center">Project</Link>
                    <Link href="#" className="w-28 rounded-full bg-white text-blue-theme border-blue-theme border-2 px-2 py-1 text-center">Client</Link>
                    <Link href="#" className="w-28 rounded-full bg-white text-blue-theme border-blue-theme border-2 px-2 py-1 text-center">HR</Link>
                    <Link href="#" className="w-28 rounded-full bg-white text-blue-theme border-blue-theme border-2 px-2 py-1 text-center">Ticket</Link>
                    <Link href="#" className="w-28 rounded-full bg-white text-blue-theme border-blue-theme border-2 px-2 py-1 text-center">Finance</Link>
                </div>

            </section>
        </main>
     );
}
 
export default Overview;