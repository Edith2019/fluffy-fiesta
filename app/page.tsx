// import Image from "next/image";
// import { signUpAction } from "@/app/actions";
// import { FormMessage, Message } from "@/components/form-message";

export default function Home() {
    // const { data, error } = await supabase.from("countries").select();
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    Sign up to share your feedback and help us to improve
                </h1>
                <a href="/sign-up">Sign up</a>
                <h1 className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    Already have an account and want to update feedback
                </h1>
                <a href="/sign-in">Sign in</a>
            </main>
        </div>
    );
}
