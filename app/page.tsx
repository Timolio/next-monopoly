import { LogoutButton } from '@/components/auth/logout-button';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function Home() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
            <h1>Welcome!</h1>
            <Link href="/private" className="custom-button">
                <span>Play</span>
            </Link>
            {user && <LogoutButton />}
        </div>
    );
}
