import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';

import * as actions from '../actions';

class ListItem extends React.Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription = () => {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }} >{library.description}</Text>	
				</CardSection>
			);
		}
	}

	render() {
		const { id, title } = this.props.library;
		const { selectLibrary } = this.props;
		const { titleStyle } = styles;

		return (
			<TouchableWithoutFeedback
				onPress={() => selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>

					{this.renderDescription()}

				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

ListItem.propTypes = {
	library: PropTypes.object.isRequired
};

// no logic performed in action dispatchers, so no need to create mapDispatchToProps function

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
