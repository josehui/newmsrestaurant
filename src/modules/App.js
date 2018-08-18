import React, { Component } from 'react';

import Menu from './menu/components/index';
import Sidebar from './sidebar/components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
				<Menu />
				<Sidebar />
      </div>
    );
  }
}

export default App;
