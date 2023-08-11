"use client";
import Content from "@/components/Content";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { useContentStore } from "@/store/store";
export default function Home() {
    const content = useContentStore((state) => state.content);
    const loading = useContentStore((state) => state.loading);

    return (
        <main className="flex flex-col mx-auto items-center max-w-[1200px]">
            <Title />
            {(loading || content !== "") && <Content />}

            {!loading && content === "" && <Input />}
        </main>
    );
}
