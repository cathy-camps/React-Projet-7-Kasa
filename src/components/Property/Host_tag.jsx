import styles from '../../Styles/property.module.css'

function HostTag(props) {
  return (
    <div className={styles.property_tags}>
      {props.tags.map((tag) => {
        return (
          <p key={`${tag}`} className={styles.tag}>
            {tag}
          </p>
        )
      })}
    </div>
  )
}

export default HostTag
