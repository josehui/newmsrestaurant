import React, { Component } from 'react';

import Menu from './menu/components/index';
import Sidebar from './sidebar/components';
import Header from './header/components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
				<Header />
				<Menu />
				<Sidebar />
      </div>
    );
  }
}

export default App;
