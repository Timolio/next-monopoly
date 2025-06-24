import Link from 'next/link';

export default function Home() {
    return (
        <div className="main">
            <h1>Welcome!</h1>
            <Link href="/private">Play</Link>
        </div>
    );
}
