import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideBarControllerView from './SideBarControllerView';
import { removeItem } from '../../actions';

class SideBarController extends Component {

	render() {
		return (
			<SideBarControllerView
				sidebar={this.props.sidebar}
				removeItem={this.props.removeItem}
			/>
		);
	}

}

const mapStateToProps = state => ({ sidebar: state.sidebar });
const mapDispatchToProps =  dispathc => bindActionCreators({removeItem}, dispathc);

export default connect(mapStateToProps, mapDispatchToProps)(SideBarController);
