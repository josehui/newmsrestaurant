import React from 'react';

const MenuControllerView = (props) => {

		console.log(props)

	return(
		<div className="coluna-1">
      <ul className="menu">
				{props.menu.map(item => {
					return (
						<li className="menu__lista" key={item.id}>
							<img className="menu__lista--img" src={item.imagem} height="140"/>
							<div className="menu__lista-descricao">
								<h2 className="menu__lista-descricao--nome">{item.nome}</h2>
								<span className="menu__lista-descricao--preco">R$ {item.preco}</span>
							</div>
							<div className="menu__lista--btn"><button>Comprar</button></div>
						</li>
					)
				})}
			</ul>
    </div>
	);

}

export default MenuControllerView;
