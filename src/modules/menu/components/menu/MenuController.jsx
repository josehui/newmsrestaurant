import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchMenu } from '../../actions';
import { addItem } from '../../../sidebar/actions';
import MenuControllerView from './MenuControllerView';

class MenuController extends Component {

		componentDidMount(){
			this.props.fetchMenu();
		}

		render(){
			return <MenuControllerView menu={this.props.menu} addItem={this.props.addItem} />
		}

}

const mapStateToProps = state => ({ menu: state.menu });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchMenu, addItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuController);
