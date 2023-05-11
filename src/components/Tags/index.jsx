import styles from './Tags.module.scss'

export default function Tags({ tags, filtrarFotos, mostrarTodasAsFotos }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {
          tags.map((tag) => {
            return (
                <li key={tag} onClick={()=>filtrarFotos(tag)}>{tag}</li>
              )
          })
        }
        <li onClick={()=>mostrarTodasAsFotos()}>Todas</li>
      </ul>
    </div>
  )
}
