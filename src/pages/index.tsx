import { Button } from '@mui/material'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <main>
                <h1>
                    Home
                </h1>
                <p>
                    Aplicação muito descolada e incrível
                </p>
                <Button variant="contained">
                    <Link href="/submit">
                        <a>
                            Salve, bó pra pagina submit
                        </a>
                    </Link>
                </Button>

                <Button variant="contained" color="secondary">
                    <Link href="/response">
                        <a>
                            Salve, bó pra pagina response
                        </a>
                    </Link>
                </Button>
            </main>
        </>
    )
}
