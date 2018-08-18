import React from 'react';

const SideBarControllerView = (props) => {

	return (
		<div className="coluna-2">
			<div className="sidebar">
				 	<h2 className="sidebar--title">Seu Pedido</h2>
					<ul className="sidebar__orderlist">
						{props.sidebar.orderList.length !== 0 ? props.sidebar.orderList.map((item, i) => {
							return (
							<li key={i} className="sidebar__orderlist--item" >
								<span>{item.nome} - R$ {item.preco}</span>
								<button className="btn btn-xs" onClick={() => props.removeItem(i)} >X</button>
							</li>)
						}) : <li>Nada para mostrar aqui :(</li>}
					</ul>
				<h2 className="sidebar--totalOrder">R$ <span>{props.sidebar.total}</span></h2>
			</div>
		</div>
	);

}

export default SideBarControllerView;
