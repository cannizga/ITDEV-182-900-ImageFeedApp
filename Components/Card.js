import { ActivityIndicator, Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import AuthorRow from './AuthorRow';
export const ImageProps = { style: null };
export default class Card extends React.Component {
	state = {
		loading: true,
	};
	handleLoad = () => {
		this.setState({ loading: false });
	};
	static propTypes = {
		fullname: PropTypes.string.isRequired,
		image: ImageProps['source'],
		linkText: PropTypes.string,
		onPressLinkText: PropTypes.func,
	};

	static defaultProps = {
		linkText: '',
		onPressLinkText: () => { },
	};

	render() {
		const { fullname, image, linkText, onPressLinkText } = this.props;
		const { loading } = this.state;
		return (
		<View>
		<AuthorRow
		   fullname={fullname}
		   linkText={linkText}
		   onPressLinkText={onPressLinkText}/>
		<View style={styles.images}>
		   {loading && (
		<ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} /> )}
		<Image
		   style={StyleSheet.absoluteFill}
		   source={image}
		   onLoad={this.handleLoad}/>
		</View>
		</View>);
	}
}

const styles = StyleSheet.create({
	images: {
		aspectRatio: 1,
		backgroundColor: 'rgba(0,0,0,0.02)',
	},
});