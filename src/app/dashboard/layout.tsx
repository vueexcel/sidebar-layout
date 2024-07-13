'use client';

import { useState, useEffect } from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import DashboardNavbar from "./_components/DasboardNavbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // @ts-ignore
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        setShowSidebar(window.offsetWidth > 768)
    }, []);
    
    return (
        <div className="min-h-screen w-full flex items-start border bg-slate-100">
            <DashboardSidebar onShow={() => setShowSidebar(true)} onClose={() => setShowSidebar(false)} showSidebar={showSidebar} />
            <main className={"w-full px-4 transition-all " + (showSidebar ? "md:ltr:ml-[17rem] md:rtl:mr-[17rem]" : "md:ltr:ml-[5.8rem] md:rtl:mr-[5.8rem]")}>
                <DashboardNavbar onToggleSidebar={() => setShowSidebar(!showSidebar)} />
                {children}
            </main>
        </div>
    );
}
