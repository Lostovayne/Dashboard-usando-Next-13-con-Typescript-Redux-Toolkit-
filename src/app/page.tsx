import { redirect } from "next/navigation";

export default function Homepage() {
    redirect("/dashboard/counter");

    return (
        <div>
            <h1>Hello Page Main</h1>
        </div>
    );
}
