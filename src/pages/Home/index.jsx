import './styles.css'

import {Card} from '../../components/Card'

export function Home() {
  return (
    // fragment: é necessário uma tag para deixar todos os elementos dentro do <> </> para embrulhar ou entregar as 3 ou mais condiçoes
    <div className="container"> 
    <h1>Lista de presença</h1>
    <input type="text" placeholder="Digite o nome..."/>
    <button type="button">Adicionar</button>

    <Card/>
    </div>
  )
}