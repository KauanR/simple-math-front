import { useTheme } from '@mui/material'
import styles from './styles.module.scss'

export default function Submit() {
    const theme = useTheme()
    
    return (
        <h1 style={theme.typography.h5}>
            Submit page
        </h1>
    )
}