import Board from '@/components/board/Board';

import { createClient } from '@/utils/supabase/server';

import { redirect } from 'next/navigation';

export default function Game() {
    // const supabase = await createClient();

    // const { data, error } = await supabase.auth.getUser();
    // if (error || !data.user) {
    //     redirect('/login');
    // }

    return (
        <div className="main">
            <Board />
        </div>
    );
}
