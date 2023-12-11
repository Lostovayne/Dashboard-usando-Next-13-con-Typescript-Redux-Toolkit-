import { WidgetsGrid } from "@/components";

export const metadata = {
    title: "Admin Dashboard",
    description: "SEO Title",
};

export default function MainPage() {
    return (
        <div className="text-gray-900 p-2">
            <h1 className="mt-2 text-3xl ">Dashboard</h1>
            <span className="text-xl">Informacion General</span>
            <WidgetsGrid />
            <WidgetsGrid />
        </div>
    );
}
