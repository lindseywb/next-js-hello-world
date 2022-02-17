import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <h1>Hello World!</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
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
