import React, { FC } from 'react';
import styles from './Header.module.scss';

export const Header:FC = () => {
  return (
    <section className={styles.header}>
      <h1>TodoList</h1>
    </section>
  )
}
