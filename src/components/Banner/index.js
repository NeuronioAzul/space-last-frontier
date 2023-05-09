import banner from './banner.png'
import styles from './Banner.module.scss'

function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1>Galeria com fotos do espaço</h1>
                <img src={banner} alt="A foto da terra vista do espaço" />
            </div>
        </div>
    );
}

export default Banner;