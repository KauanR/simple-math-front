import { Button, useTheme } from '@mui/material'
import styles from './styles.module.scss'

export default function Home() {
    const theme = useTheme()

    return (
        <div className={styles.wrap}>
            <img className={styles.img} src="/logo.svg" />

            <h5 style={theme.typography.h5}>
                Bem vindo ao <span className={styles.title}>Simple Math</span>!
            </h5>

            <p style={theme.typography.body2}>
                Uma maneira rápida de resolver problemas matemáticos
            </p>

            <div>
                <Button 
                    variant="contained" 
                    color="primary" 
                >
                    Começar
                </Button>
            </div>
        </div>
    )
}
