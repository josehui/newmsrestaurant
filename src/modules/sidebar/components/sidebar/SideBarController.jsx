import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBarControllerView from './SideBarControllerView';

class SideBarController extends Component {

	render() {
		return (<SideBarControllerView  sidebar={this.props.sidebar} />);
	}

}


const mapStateToProps = state => ({ sidebar: state.sidebar });

export default connect(mapStateToProps)(SideBarController);
