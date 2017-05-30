import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(rootReducer)}>
				<View style={{ flex: 1 }}>
					<Header headerText='Tech Cards' />
					<LibraryList />
				</View>	
			</Provider>
			
		);
	}
}

export default App;
