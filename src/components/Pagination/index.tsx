import {IoCaretBackOutline, IoCaretForwardOutline} from 'react-icons/io5'
import styles from './Pagination.module.css'

interface PaginationProps {
    page: number
    total_pages: number
    back: () => any
    forward: () => any
}

export default function Pagination({page, total_pages, back, forward}: PaginationProps) {
    return (
        <div className={styles.container}>
            {page > 1 && <IoCaretBackOutline onClick={back} />}
            <p>Page {page} of {total_pages}</p>
            {page < total_pages && <IoCaretForwardOutline onClick={forward} />}
        </div>
    )
}