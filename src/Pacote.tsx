import "./pacote.css"
import type { PacoteType } from "./types"

type PacoteProps = {
    info: PacoteType
}

export default function Pacote({info}:PacoteProps) {
    return (
        <div className="pacote">
            <dt>ID</dt>
            <dd title={info.id}>{info.id.substring(0,8)}</dd>
            <dt>Altura(cm)</dt>
            <dd>{info.altura}</dd>
            <dt>Largura(cm)</dt>
            <dd>{info.largura}</dd>
            <dt>Profundidade(cm)</dt>
            <dd>{info.profundidade}</dd>
            <dt>Peso(kg)</dt>
            <dd>{info.peso}</dd>
        </div>
    )
}