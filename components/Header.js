import Link from 'next/link'

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
