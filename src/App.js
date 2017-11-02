import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {
		loggedIn: false
	}
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyB0pWEiNciCzUcj0PZ7jYxUmZGxPvP_CcY',
			authDomain: 'react-native-auth-7524c.firebaseapp.com',
			databaseURL: 'https://react-native-auth-7524c.firebaseio.com',
			projectId: 'react-native-auth-7524c',
			storageBucket: 'react-native-auth-7524c.appspot.com',
			messagingSenderId: '899687006807'
		});
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					loggedIn: true
				});
			} else {
				this.setState({
					loggedIn: false
				});
			}
		});
	}

	renderContent() {
		if (this.state.loggedIn) {
			return (
				<Button>
					Log Out
				</Button>
			);
		}
			return (
				<LoginForm />
			);
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}
export default App;
