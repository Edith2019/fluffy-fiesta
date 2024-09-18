import { signInAction } from "@/app/actions";
// import { Message } from "@/components/form-message";

export default function signIn() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    Share your feedback and help us to improve
                </h1>

                <div className="flex gap-4 items-center flex-col sm:flex-row ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 font-[family-name:var(--font-geist-sans)]">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                name="email"
                                placeholder="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 "
                                htmlFor="password"
                            >
                                password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                        </div>

                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            formAction={signInAction}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
