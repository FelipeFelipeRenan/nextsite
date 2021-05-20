import Head from 'next/head'
import React from 'react';

import styles from '../styles/principal.module.css'
import axios from 'axios';
import livros from './coisas.json';

const Principal = ( {dados} ) => {
    
    return(
        <>
        <Head>
            <meta name="autor" content="Felipe Renan Fernandes"/>
            <meta charSet="utf-8"/>
            <title>Meu Acervo</title>
        </Head>
        <a href="\teste">Clique para cadastrar uma nova obra</a>
                <div className={styles.link}>     
                        {dados.map((item) =>(
                            <div key={item.id}className= {styles.integrante}>{item.name}{console.log(item)}</div>
                        ))}
                    
                </div>
        </>    
    )
}

//  Principal.getInitialProps =  () => {
//     const teste = livros
//     return {dados: 
//         teste
// };

// }
// Principal.getInitialProps = async () => {
//     const teste = await axios.get('https://jsonplaceholder.typicode.com/users')   
//      return {dados: 
//         teste.data
// };

// }

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const teste = await res.json()

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
