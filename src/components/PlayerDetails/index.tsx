import { PlayerInterface } from '@interfaces/PlayerInterface'
import TeamIcon from '@components/TeamIcon'
import styles from './PlayerDetails.module.css'

interface PlayerDetailsProps {
    player: PlayerInterface
}

export default function PlayerDetails({player}: PlayerDetailsProps) {
    return (
        <div className={styles.container}>
            <TeamIcon team_abbreviation={player.team.abbreviation} size={100} />
            <h1>{player.first_name} {player.last_name}</h1>
            <div className={styles.playerInfo}>
                <p>{player.team.full_name}</p>
                {player.position && <p>{player.position}</p>}
            </div>
            <div className={styles.playerInfo}>
            {player.height_feet && <p>{player.height_feet}ft</p>}
            {player.weight_pounds && <p>{player.weight_pounds}pds</p>}
            </div>
        </div>
    )
}