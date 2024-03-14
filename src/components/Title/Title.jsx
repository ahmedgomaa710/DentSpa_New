import React from 'react'
import styles from "./title.module.css"
export default function Title(props) {
  return (
    <div className={styles.title}>
        <h2> {props.name}</h2>
    </div>
  )
}
