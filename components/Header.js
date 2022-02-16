import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <h1>Hello World!</h1>
            <h2>My first Next.js app</h2>
            <nav>
                <ul>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
