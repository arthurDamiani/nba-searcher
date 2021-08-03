import { useEffect, useState } from 'react'
import {VscLoading} from 'react-icons/vsc'
import {PlayerInterface} from '@interfaces/PlayerInterface'
import {MetaInterface} from '@interfaces/MetaInterface'
import Header from '@components/Header'
import Filter from '@components/Filter'
import PlayerCard from '@components/PlayerCard'
import Pagination from '@components/Pagination'
import Footer from '@components/Footer'
import styles from 'styles/Home.module.css'
import api from './api/api'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [result, setResult] = useState<PlayerInterface[]>([])
  const [reqInfo, setReqInfo] = useState<MetaInterface | null>(null)
  const [player, setPlayer] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    loaded && setLoaded(false)
    const getPlayers = async () => {
      await api.get(`players?search=${player}&per_page=24&page=${page}`)
        .then(res => {
          setResult(res.data.data)
          setReqInfo(res.data.meta)
          window.scrollTo(0, 0)
          setLoaded(true)
        })
        .catch(() => alert('falha'))
    }
    getPlayers()
  }, [page, player])

  return (
    <div className={styles.container}>
      <Header title='NBA players' />
      <Filter value={player} onChange={e => setPlayer(e.target.value)} />
        {loaded ?
          <div className={styles.gridContainer}>
            {result.map(player => {
              return <PlayerCard key={player.id} player={player} />
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
