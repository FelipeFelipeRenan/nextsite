import Head from 'next/head'
import React from 'react';
import Image from 'next/image'
import styles from '../styles/principal.module.css'
// import axios from 'axios';
import livros from './coisas.json';

const Principal = ( {dados} ) => {
    
    return(
        <>
        <Head>
            <meta name="autor" content="Felipe Renan Fernandes"/>
            <meta charSet="utf-8"/>
            <title>Meu Acervo</title>
        </Head>
        <header className ={styles.cabecalho}><a href="\teste">Clique para cadastrar uma nova obra</a></header>
        
                <div className={styles.link}>     
                        {dados.map((item) =>(
                            <div key={item.id}className= {styles.integrante}>
                                {item.name}
                                <Image src={item.capa} alt="Capa do livro" width={300} height={200} />
                                <div>{item.autor}</div>
                            
                            </div>
                        ))}
                    
                </div>
        </>    
    )
}

export const getStaticProps = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const teste = await res.json()
    const res = await livros
    const teste = await res

    // console.log(teste);
    
    if (!res) {
        return {
          notFound: true,
        }
      }
    return {props: {
        dados: teste
    },
};

}

export default Principal

