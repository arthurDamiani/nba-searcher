import { TeamInterface } from '@interfaces/TeamInterface'
import TeamIcon from '@components/TeamIcon'
import styles from './TeamCard.module.css'

interface TeamCardProps {
    team: TeamInterface
}

export default function TeamCard({team}: TeamCardProps) {
    return (
        <div className={styles.container}>
            <TeamIcon team_abbreviation={team.abbreviation} size={100} />
            <h1 className={styles.noMargin}>{team.abbreviation}</h1>
            <p className={styles.noMargin}>{team.full_name}</p>
            <p className={styles.noMargin}>{team.division}</p>
        </div>
    )
}