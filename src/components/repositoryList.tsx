import { RepositoryItem } from "./repositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";


interface Repository{
    name: string;
    description: string;
    html_url: string;

}


export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(()=> {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(Response => Response.json())
        .then(data =>setRepositories(data))
    },  [])

    console.log(repositories)

    //CUIDADO EM DEIXAR O USEFFECT SEM O SEGUNDO PARAMETRO, ELE FICA EM LOOP, 
    //NÃO MUDAR A MESMA VARIAVEL UTILIZANDO USEEFFECT, TAMBÉM FICA EM LOOP

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key ={repository.name} repository = {repository}/>
                })
                }
                
            </ul>

        </section>
    )
}