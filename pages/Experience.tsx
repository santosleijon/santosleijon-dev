import styles from '../styles/Experience.module.css'

interface ExperienceProps {
  timePeriod: string
  role: string
  organization?: string | undefined
  children?: JSX.Element
}

export default function Experience(props: ExperienceProps) {
  return (
    <div className={styles.experience}>
      <div className={styles.timePeriod}>
        {props.timePeriod}
      </div>
      <div className={styles.description}>
        <h3>{props.role}{props.organization ? ', ' + props.organization : null}</h3>
        {props.children}
      </div>
    </div>
  )
}
