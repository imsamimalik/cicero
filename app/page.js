"use client";
import Content from "@/components/Content";
import Input from "@/components/Input";
import Loader from "@/components/Loader";
import PopularNow from "@/components/PopularNow";
import Sidebar from "@/components/Sidebar";
import { useContentStore } from "@/store/store";
export default function Home() {
    const content = useContentStore((state) => state.content);
    const loading = useContentStore((state) => state.loading);
    return (
        <main className="flex flex-col items-center min-h-screen">
            {loading && <Loader />}
            <div
                className={`flex ${
                    content === "" ? "h-0" : "h-auto"
                } transition-all  duration-1000 justify-center`}
            >
                {content !== "" && (
                    <>
                        <Sidebar />
                        <Content />
                    </>
                )}
            </div>

            <Input />
            {content === "" && <PopularNow />}
        </main>
    );
}
