'use client';

import { LogoutButton } from '@/components/auth/LogoutButton';

import { useUserStore } from '@/store/userStore';
import Image from 'next/image';
import Link from 'next/link';

// Я тут на быструю руку сварганил загрузку, чисто чтобы затестить

export default function Home() {
    const { isLoading, user } = useUserStore();
    if (isLoading)
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <span className=" animate-spin">Loading...</span>
            </div>
        );

    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
            <h1>Welcome{user && ', ' + user.username}!</h1>
            {user && (
                <div className="flex items-center flex-col gap-2">
                    <Image
                        className="rounded-full"
                        src={user?.avatar_url}
                        alt="Avatar"
                        width={120}
                        height={120}
                        unoptimized
                    />
                    <div className="text-neutral-600">
                        Logged in as{' '}
                        <span className="font-semibold">{user.email}</span>
                    </div>
                </div>
            )}
            <Link href="/private" className="custom-button">
                <span>Play</span>
            </Link>
            {user && <LogoutButton />}
        </div>
    );
}
