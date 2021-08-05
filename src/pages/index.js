import { Counter } from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ButtonAppBar from './panel'

export default function Home() {
  return (
    <div className={styles.container}>
        <ButtonAppBar />
      <Head>
        <title>Task Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
      </header>
    </div>
  )
}
