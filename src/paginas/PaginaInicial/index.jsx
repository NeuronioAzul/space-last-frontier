import styles from './PaginaInicial.module.scss'

import Header from 'components/Header/Header'
import Menu from 'components/Menu'
import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Galeria from 'components/Galeria'
import Populares from 'components/Populares'

export default function PaginaInicial() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Footer />
        </>
    )
}