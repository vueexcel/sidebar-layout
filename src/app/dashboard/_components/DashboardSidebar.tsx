import { RxCross2 } from "react-icons/rx";
import { SiReactivex } from "react-icons/si";

import NestedMenuItem from "./NestedMenuItem"
import sidebarContent from "../_constansts/sidebar";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";

interface DashboardSidebarProps {
    showSidebar: boolean,
    onClose: () => void,
    onShow: () => void
}

export default function DashboardSidebar({ showSidebar, onClose }: DashboardSidebarProps) {
    const [show, setShow] = useState(showSidebar);
    const showLabel = useDebounce(showSidebar || show, 170);

    const showSidebarContent = show || showSidebar

    const onToggleSidebar = (show: boolean) => {
        // @ts-ignore
        if (window.offsetWidth > 768 || showSidebar) {
            return
        }

        setShow(show);
    }

    return (
        <aside 
            onMouseEnter={() => onToggleSidebar(true)}
            onMouseLeave={() => onToggleSidebar(false)} 
            className={
                "scrollbar shadow fixed top-4 bottom-4 transition-all z-50 bg-[linear-gradient(195deg,#42424a,#191919)] rounded-2xl w-[16rem] "
                + (showSidebarContent ? 'md:w-[16rem] ltr:left-4 rtl:right-4' : 'ltr:translate-x-[-100%] rtl:translate-x-[100%] md:rtl:translate-x-0 md:ltr:translate-x-0 md:w-[4.8rem] ltr:left-0 rtl:right-0 md:ltr:left-4 md:rtl:right-4')
            }>
            <div className={"border-b border-b-slate-600 py-5 flex items-center " + (showSidebarContent ? 'ltr:ml-4 rtl:mr-4' : 'justify-center')}>
                <SiReactivex size={20} className="text-slate-400" />
                {showSidebarContent && (<>
                    <h2 className="text-xl font-bold text-slate-300 ltr:ml-3 rtl:mr-3 font-sans text-center">Creative SX</h2>
                    <button onClick={onClose} type="button" className="ltr:ml-auto rtl:mr-auto hover:bg-slate-500 p-1 transition-colors rounded-sm md:hidden">
                        <RxCross2 size={20} className="text-slate-400" />
                    </button>
                </>)}
            </div>

            <ul className="p-2">
                {sidebarContent.map((item, index) => (
                    item.type === 'heading' ? (
                        <li key={index} className="mb-2 mt-4">
                            <h6 className="text-sm font-bold text-slate-400">{item.title}</h6>
                        </li>
                    ) : item.type == 'divider' ? <hr key={index} className="border-b border-b-slate-600 h-1 bg-transparent border-t-0" /> 
                     : <NestedMenuItem
                        key={index}
                        showLabel={showLabel}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
