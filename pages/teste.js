import React from 'react';
import Head from 'next/head'

import styles from '../styles/teste.module.css'

export default function Teste(){

    return(
        <div>
        <Head>
            <meta name="autor" content="Felipe Renan Fernandes"/>
            <meta charSet="utf-8"/>
            <title>Cadastro de Obras</title>

        </Head>
        
            <header  className={styles.cabecalho}>
                Cadastro de novas obras
            </header>
                <div>
                    <form className = {styles.formulario}>
                        <label htmlFor="name">Nome</label>
                            <input id="name" type="text" autoComplete="name" required />
                        <label htmlFor='autor'>Autor</label>
                            <input id="autor" type="text" required></input>
                        <label htmlFor='ano'>Data de lançamento</label>
                            <input id='ano' type="date"></input>

                        <button className={styles.botao}> Clique aqui!</button>
                    </form>
                </div>
            <footer className={styles.rodape}>
                rodape
            </footer>
        
        </div>
    )
}