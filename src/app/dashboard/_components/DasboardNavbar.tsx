import { MdMenu } from "react-icons/md"

interface DashboardNavbarProps {
    onToggleSidebar: () => void
}

export default function DashboardNavbar({ onToggleSidebar }: DashboardNavbarProps) {

    const tooggleDirection = () => {
        if (document.dir === 'ltr') {
            document.dir = 'rtl'
        } else {
            document.dir = 'ltr'
        }
    }

    return (
        <>
            <div className="h-4 w-full" />
            <nav className="sticky top-2 z-40 flex py-4 rounded-xl backdrop-blur-lg bg-white/30 flex-shrink-0 px-4 w-full ">
                <button type='button' className="size-8 text-slate-700 hover:bg-slate-200 transition-all rounded flex items-center justify-center">
                    <MdMenu onClick={onToggleSidebar} className="w-6 h-6" />
                </button>

                <h2 className="text-xl font-bold text-slate-800 ltr:ml-3 rtl:mr-3 font-sans">Dashboard</h2>

                <button onClick={tooggleDirection} type='button' className="ltr:ml-auto rtl:mr-auto bg-slate-100 px-3 shadow text-slate-700 hover:bg-slate-200 transition-all rounded flex items-center justify-center">
                    Toggle RTL/LTR
                </button>

                {/* Other navbar items */}
            </nav>
        </>
    )
}
