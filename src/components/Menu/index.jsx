import icones from './icones.json'
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {
                    icones.map((icone) => {
                        return (
                            <li key={icone.id} className={styles.menu__item}>
                                <img src={icone.img} alt={icone.text} />
                                <a href={icone.href}>{icone.text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}