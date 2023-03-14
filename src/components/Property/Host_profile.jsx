import styles from '../../Styles/host.module.css'

function HostProfile({ host }) {
  return (
    <div className={styles.host_profile}>
      <p className={styles.host_name}>{host.name}</p>
      <img
        className={styles.host_img}
        src={host.picture}
        alt={`Propriétaire ${host.name}`}
      />
    </div>
  )
}

export default HostProfile
