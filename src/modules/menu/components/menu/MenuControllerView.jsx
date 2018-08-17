import React from 'react';

const MenuControllerView = (props) => {

		console.log(props)

	return(
		<div className="coluna-1">
      <ul className="menu">
				{props.menu.map(item => {
					return (
						<li className="menu__lista" key={item.id}>
							<div className="menu__lista--img">
								<img src="https://avatars3.githubusercontent.com/u/5497196?s=460&v=4" height="150"/>
							</div>
							<div className="menu__lista--nome"><h2>Teste</h2></div>
							<div className="menu__lista--btn"><button>Comprar</button></div>
						</li>
					)
				})}
			</ul>
    </div>
	);

}

export default MenuControllerView;
