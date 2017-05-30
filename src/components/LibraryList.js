import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native'; 
import ListItem from './ListItem';

class LibraryList extends React.Component {
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		// take list of libraries and render it to the screen
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	// for rendering a single element in the library list
	renderRow = (library) => {
		return <ListItem library={library} />;
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);
