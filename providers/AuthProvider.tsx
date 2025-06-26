'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { createClient } from '@/lib/supabase/client';

// Это пиздец, я 3 часа потратил на то, чтобы оно заработало

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = useUserStore(state => state.user);
    const setUser = useUserStore(state => state.setUser);
    const clearUser = useUserStore(state => state.clearUser);
    const setLoading = useUserStore(state => state.setLoading);

    useEffect(() => {
        const supabase = createClient();

        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                if (session && session.user && !user?.id) {
                    setLoading(true);

                    supabase
                        .from('users')
                        .select('*')
                        .eq('id', session.user.id)
                        .single()
                        .then(({ data }) => {
                            if (data) {
                                setUser(data);
                            }
                        });
                }
            } else if (event === 'SIGNED_OUT') {
                clearUser();
            } else if (event === 'INITIAL_SESSION') {
                if (!session) {
                    setLoading(false);
                }
            }
        });

        return () => {
            data?.subscription.unsubscribe();
        };
    }, [user, setUser, clearUser]);

    return <>{children}</>;
}
