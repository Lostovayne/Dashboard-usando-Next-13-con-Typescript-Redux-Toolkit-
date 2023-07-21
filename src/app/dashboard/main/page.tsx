import { SimpleWidget } from "../../../components/SimpleWidget";

export const metadata = {
    title: "Admin Dashboard",
    description: "SEO Title",
};

export default function MainPage() {
    return (
        <div className="text-gray-900 p-2">
            <h1 className="mt-2 text-3xl ">Dashboard</h1>
            <span className="text-xl">Informacion General</span>

            <div className="flex flex-wrap p-2 items-center justify-center">
                <SimpleWidget />
                {/* <SimpleWidget />
                <SimpleWidget />
                <SimpleWidget />
                <SimpleWidget />
                <SimpleWidget /> */}
            </div>
        </div>
    );
}
