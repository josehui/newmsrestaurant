import React, { Component } from 'react';

import Menu from './modules/menu/components/index';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
				<Menu />
				<div className="coluna-2">Coluna 2</div>
      </div>
    );
  }
}

export default App;
