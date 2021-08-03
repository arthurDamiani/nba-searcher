import { useState, useEffect } from 'react'
import {VscLoading} from 'react-icons/vsc'
import { TeamInterface } from '@interfaces/TeamInterface'
import { MetaInterface } from '@interfaces/MetaInterface'
import Header from '@components/Header'
import TeamCard from '@components/TeamCard'
import Pagination from '@components/Pagination'
import Footer from '@components/Footer'
import styles from 'styles/Home.module.css'
import api from './api/api'

export default function Teams() {
    const [loaded, setLoaded] = useState(false)
    const [result, setResult] = useState<TeamInterface[]>([])
    const [reqInfo, setReqInfo] = useState<MetaInterface | null>(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        loaded && setLoaded(false)
        const getTeams = async () => {
            await api.get(`teams?page=${page}&per_page=12`)
                .then(res => {
                    setResult(res.data.data)
                    setReqInfo(res.data.meta)
                    window.scrollTo(0, 0)
                    setLoaded(true)
                })
                .catch(() => alert('falha'))
        }
        getTeams()
    }, [page])

    return (
        <div className={styles.container}>
            <Header title='NBA teams' />
            {loaded ?
                <div className={styles.gridContainer}>
                    {result.map(team => {
                        return <TeamCard key={team.id} team={team} />
                    })}
                </div>
            :
                <VscLoading color='#1d428a' size={100} />
            }
            {reqInfo && 
                <Pagination 
                    page={page}
                    total_pages={reqInfo.total_pages}
                    back={() => setPage(page - 1)}
                    forward={() => setPage(page + 1)}
                />
            }
            <Footer />
        </div>
    )
}