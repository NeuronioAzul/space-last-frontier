import './Header.css'
import styles from './Header.module.scss'
import astro from './astro.png'
import search from './search.png'

export default function Header() {
    return (
        <header className={`${styles.header} header`}>
            <div className='logo'>
                <img className='logo' src={astro} alt="Astronauta com saturno na mão direita" />
                <div>
                    <p>Fronteira Final</p>
                    <p>Embarque nessa nave</p>
                </div>
            </div>
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder='O que você procura?' />
                <img src={search} alt="lupa para buscar" />
            </div>
        </header>
    )
}
