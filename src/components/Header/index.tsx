import {useRouter} from 'next/router'
import Link from 'next/link'
import {GiBasketballBasket} from 'react-icons/gi'
import styles from './Header.module.css'

interface HeaderProps {
    title: string
}

export default function Header({title}: HeaderProps) {
    const router = useRouter()
    return (
        <header className={styles.container}>
            <GiBasketballBasket onClick={() => router.push('/')} size={100} />
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.linksContainer}>
                <Link href='/'>
                    <a className={styles.link} href=''>
                        players
                    </a>
                </Link>
                <Link href='/teams'>
                    <a className={styles.link} href=''>
                        teams
                    </a>
                </Link>
            </div>
        </header>
    )
}