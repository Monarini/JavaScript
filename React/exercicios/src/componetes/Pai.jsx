import React from 'react'
// import Filho from './Filho'

function childrenWithProps(props){
    return React.Children.map(props.children, child => {
        return React.cloneElement(child,{...props, ...child.props})
    })
}

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* {props.children} */}
            
            {childrenWithProps(props)}
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>
            <Filho {...props} nome="João"/> */}
        </ul>
    </div>