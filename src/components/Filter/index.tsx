import { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Filter.module.css'

export default function Filter({...props}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return <input 
        className={styles.filter}
        placeholder='filter by player name' 
        {...props}
    />
}