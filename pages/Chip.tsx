import styles from '../styles/Chip.module.css'

interface ChipProps {
  children: string
}

export default function Chip(props: ChipProps) {
  return (
    <div className={styles.chip}>
      {props.children}
    </div>
  )
}