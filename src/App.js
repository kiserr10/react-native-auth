import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyB0pWEiNciCzUcj0PZ7jYxUmZGxPvP_CcY',
			authDomain: 'react-native-auth-7524c.firebaseapp.com',
			databaseURL: 'https://react-native-auth-7524c.firebaseio.com',
			projectId: 'react-native-auth-7524c',
			storageBucket: 'react-native-auth-7524c.appspot.com',
			messagingSenderId: '899687006807'
		});
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}
export default App;
