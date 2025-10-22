import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function HeaderFirtPage() {
    const { auth } = usePage<SharedData>().props;

    return (
        <header className="fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-[#FDFDFC] px-6 py-2 text-sm shadow-sm">
            <div>
                <img src="/Logo.svg" alt="IBS Logo" className="h-12" />
            </div>
            <nav className="flex items-center gap-2">
                {auth.user ? (
                    <Link
                        href={dashboard()}
                        className="inline-block rounded-sm border border-[#D5CAB4] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a]"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={login()}
                            className="inline-block rounded-sm border border-[#D5CAB4] bg-white px-5 py-1.5 text-sm leading-normal text-black hover:bg-gray-50"
                        >
                            Log in
                        </Link>
                        <Link
                            href={register()}
                            className="inline-block rounded-sm border border-[#D5CAB4] bg-white px-5 py-1.5 text-sm leading-normal text-black hover:bg-gray-50"
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}