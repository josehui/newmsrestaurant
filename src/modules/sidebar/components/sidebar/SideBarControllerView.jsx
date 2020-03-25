import React from 'react';

const SideBarControllerView = (props) => {

	return (
		<div className="coluna-2">
			<div className="sidebar">
				<h2 className="sidebar--title">食物／飲品</h2>
					<ul className="sidebar__orderlist">
						{props.sidebar.orderList.length !== 0 ? props.sidebar.orderList.map((item, i) => {
							return (
							<li key={i} className="sidebar__orderlist--item" >
									<span>{item.name[0]} {<img src={item.pIcon} width="55vh" height="70vh" alt="microphone icon" />}</span>
									{/*<span>{item.preco} ({item.name})<br />{item.preco2}</span>*/}
								<button className="btn btn-xs" onClick={() => props.removeItem(i)} >X</button>
							</li>)
						}) : <li><center>未收到任何order</center></li>}
					</ul>
				{/*<h2 className="sidebar--totalOrder">$ <span>{props.sidebar.total}</span></h2>*/}
			</div>
		</div>
	);

}

export default SideBarControllerView;
