import Tags from '../Tags';
import styles from './Galeria.module.scss'
import fotosJson from './fotos.json'
import Cards from './cards';
import { useState } from 'react';

export default function Galeria() {
    const [fotos, setFotos] = useState(fotosJson)
    const [tags, setTag] = useState([...new Set(fotos.map((foto) => foto.tag))])
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags
                tags={tags}
                fotosJson={fotosJson}
            <Cards fotos={fotos} styles={styles} />
        </section>
    );
}
