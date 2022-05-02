import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HelpIcon from '@mui/icons-material/HelpOutline'

import style from './styles.module.scss'
import Link from 'next/link'

export default function Header() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton size="large" edge="start">
                    <MenuIcon />
                </IconButton>

                <h3 className={style.flexGrow}>
                    <Link href='/'>
                        Simple Math
                    </Link>
                </h3>

                <IconButton size="large" edge="end">
                    <HelpIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}