import Pacote from "./Pacote";
import "./app.css"
import type { PacoteType } from "./types";

const data:Array<PacoteType> = [{
  id:'dc93f378-19ed-44df-90c1-dd61dd8228d4',
  altura: 30.0,
  largura: 20.0,
  profundidade: 40.0,
  peso: 2.34
}]

export default function App() {
  return (
    <section className="app">
      <h2>Pacotes</h2>
      <div className="pacotes">
          <Pacote info={data[0]}/>
      </div>
    </section>
  )
}

