import Header from '../../components/Header/Header'
import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import styles from './PaginaInicial.module.scss'
import Footer from '../../components/Footer'
import Galeria from '../../components/Galeria'

export default function PaginaInicial() {
    return (
        <>
            <Header />
            <main className={styles.principal}>
                <Menu />
                <Banner />
            </main>
            <div>
                <Galeria />
            </div>
            <Footer />
        </>
    )
}