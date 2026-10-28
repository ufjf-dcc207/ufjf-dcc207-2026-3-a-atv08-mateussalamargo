import Pacote from "./Pacote";
import "./app.css"
import type { PacoteType } from "./types";

const data:Array<PacoteType> = [
  {
    id:'dc93f378-19ed-44df-90c1-dd61dd8228d4',
    altura: 30.0,
    largura: 20.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id:'0459ed5f-1db0-44df-98f9-9271efa0c953',
    altura: 40.0,
    largura: 50.0,
    profundidade: 10.0,
    peso: 22.34
  }
]

export default function App() {
  return (
    <section className="app">
      <h2>Pacotes</h2>
      <div className="pacotes">
          {data.map(p => <Pacote info={p} key={p.id}/>)}
      </div>
    </section>
  )
}

