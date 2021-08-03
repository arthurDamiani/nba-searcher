import {TeamInterface} from './TeamInterface'

export interface PlayerInterface {
    id: number
    first_name: string
    height_feet?: number
    height_inches?: number
    last_name: string
    position?: string
    weight_pounds?: number
    team: TeamInterface
}