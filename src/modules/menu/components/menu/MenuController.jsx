import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMenu } from '../../actions';
import MenuControllerView from './MenuControllerView';

class MenuController extends Component {

		componentDidMount(){
			this.props.fetchMenu();
		}

		render(){
			return <MenuControllerView menu={this.props.menu} />
		}

}

function mapStateToProps(state){
	return { menu: state.menu };
}

export default connect(mapStateToProps, {fetchMenu})(MenuController);
