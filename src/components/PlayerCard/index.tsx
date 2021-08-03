import Link from 'next/link'
import {PlayerInterface} from '@interfaces/PlayerInterface'
import styles from './PlayerCard.module.css'
import TeamIcon from '@components/TeamIcon'

interface PlayerCardProps {
    player: PlayerInterface
}

export default function PlayerCard({player}: PlayerCardProps) {
    return (
        <Link href={`playerDetails/${player.id}`}>
            <a href='' className={styles.container}>
                <h1 className={styles.title}>{player.first_name} {player.last_name}</h1>
                <TeamIcon team_abbreviation={player.team.abbreviation} size={100} />
            </a>
        </Link>
    )
}