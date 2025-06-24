'use client';

import { createClient } from '@/lib/supabase/client';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useState } from 'react';

export default function Login() {
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const supabase = createClient();

    const searchParams = useSearchParams();

    const next = searchParams.get('next');

    async function signInWithGoogle() {
        setIsGoogleLoading(true);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/auth/callback?next=${
                        next ? `?next=${encodeURIComponent(next)}` : ''
                    }`,
                },
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            console.error('There was an error logging in with Google.');
            setIsGoogleLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <button
                className="custom-button"
                type="button"
                onClick={signInWithGoogle}
                disabled={isGoogleLoading}
            >
                {isGoogleLoading ? 'Loading...' : 'Sign in with Google'}
            </button>
        </div>
    );
}
