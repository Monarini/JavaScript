import React from 'react'
import ReactDOM from 'react-dom'

// import BomDia from './componetes/bomDia'
// import Multi, {BoaNoite} from './componetes/Multiplos'
// import Saudacao from './componetes/Saudacao'
import Pai from './componetes/Pai'
import Filho from './componetes/Filho'

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />

        </Pai>

        {/* <Saudacao tipo="Bom dia" nome="João"/> */}
        {/* <BomDia nome="Bruno"/>
        <Multi.BoaTarde nome="Ana"/>
        <BoaNoite nome="Bia"/> */}
    </div>
, document.getElementById('root'))