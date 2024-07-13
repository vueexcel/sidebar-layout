'use client';

import { useEffect, useState } from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import DashboardNavbar from "./_components/DasboardNavbar";
import useDimenstion from "@/hooks/useDimenstion";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { width } = useDimenstion();
    const [showSidebar, setShowSidebar] = useState(width > 768);

    useEffect(() => {
        setShowSidebar(width > 768);
    }, [width]);

    return (
        <div className="min-h-screen w-full flex items-start border bg-slate-100">
            <DashboardSidebar onClose={() => setShowSidebar(false)} showSidebar={showSidebar} />
            <main className={"w-full px-4 transition-all " + (showSidebar ? "md:ltr:ml-[17rem] md:rtl:mr-[17rem]" : "md:ltr:ml-[5.8rem] md:rtl:mr-[5.8rem]")}>
                <DashboardNavbar onToggleSidebar={() => setShowSidebar(!showSidebar)} />
                {children}
            </main>
        </div>
    );
}
