export interface TeamInterface {
    id: number
    abbreviation: string
    city: string
    conference: 'East' | 'West'
    division: 'Pacific' | 'Atlantic' | 'Northwest' | 'Southwest' | 'Central' | 'Southeast'
    full_name: string
    name: string
}