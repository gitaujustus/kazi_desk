import Link from "next/link";
import { usePathname } from "next/navigation";

const LowerPills = () => {
    const pathname = usePathname();

    const pillItems = [
        { href: "/admin/advanced/income", label: "Income" },
        { href: "/admin/advanced/timesheet", label: "Timesheet" },
        { href: "/admin/advanced/pendingleaves", label: "Pending Leaves" },
        { href: "/admin/advanced/opentickets", label: "Open Tickets" },
        { href: "/admin/advanced/pendingtasks", label: "Pending Tasks" },
        { href: "/admin/advanced/pendingfollowup", label: "Pending Follow Up" },
    ];

    return ( 
        <div className="flex flex-wrap justify-center gap-2 bg-blue-theme p-2 rounded-t-lg">
            {pillItems.map((item) => (
                <Link 
                    key={item.href}
                    href={item.href} 
                    className={`${
                        pathname === item.href 
                            ? 'bg-[#3d50fc] text-white' 
                            : 'bg-white text-blue-theme'
                    } flex-grow basis-1/3 sm:basis-auto rounded-full border-blue-theme border px-3 py-1 text-center text-xs whitespace-nowrap`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
 
export default LowerPills;