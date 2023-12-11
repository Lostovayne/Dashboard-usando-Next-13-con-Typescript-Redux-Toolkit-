import { Sidebar } from "../../components";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-slate-100  min-w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex w-full justify-between  ">
                <Sidebar />
                <div className="p-2 w-[calc(100%-20rem)] md:ml-80 text-slate-950">{children}</div>
            </div>
        </div>
    );
}
