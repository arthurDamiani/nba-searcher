import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {VscLoading} from 'react-icons/vsc'
import { PlayerInterface } from '@interfaces/PlayerInterface'
import Header from '@components/Header'
import PlayerDetail from '@components/PlayerDetails'
import Footer from '@components/Footer'
import styles from 'styles/Home.module.css'
import api from 'pages/api/api'

export default function PlayerDetails() {
    const router = useRouter()
    const {id} = router.query
    const [loaded, setLoaded] = useState(false)
    const [playerDetails, setPlayerDetails] = useState<PlayerInterface | null>(null)

    useEffect(() => {
        loaded && setLoaded(false)
        const getPlayerDetails = async () => {
            await api.get(`players/${id}`)
                .then(res => {
                    setPlayerDetails(res.data)
                    setLoaded(true)
                })
                .catch(() => alert('Falha'))
        }
        getPlayerDetails()
    }, [])

    return(
        <div className={styles.container}>
            <Header title='Player details' />
            {loaded && playerDetails ?
                <PlayerDetail player={playerDetails} />
            :
                <VscLoading color='#1d428a' size={100} />
            }
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: {},
    }
}