import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchMenu } from '../../actions';
import { addItem } from '../../../sidebar/actions';
import MenuControllerView from './MenuControllerView';
import PreloadView from '../preloader/PreloaderView';

class MenuController extends Component {

		componentDidMount(){
			this.props.fetchMenu();
		}

		render(){
			if(this.props.menu.status_request === 'finish'){
				return <MenuControllerView menu={this.props.menu.menu} addItem={this.props.addItem} />
			} else {
				return <PreloadView />
			}


		}

}

const mapStateToProps = state => ({ menu: state.menu });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchMenu, addItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuController);
