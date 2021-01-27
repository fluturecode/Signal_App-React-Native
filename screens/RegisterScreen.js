import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { KeyboardAvoidingView, StyleSheet, View } from "react-native"
import { Button, Input, Text } from "react-native-elements"

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [imageUrl, setImageUrl] = useState("")

	const register = () => {}

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<StatusBar style='light' />
			<Text h3 style={{ marginBottom: 50 }}>
				Create a Signal account
			</Text>

			<View styles={styles.inputContainer}>
				<Input
					placeholder='Full Name'
					autoFocus
					type='text'
					value={name}
					onChangeText={(text) => setName(text)}
				/>
				<Input
					placeholder='Email'
					type='email'
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder='Password'
					type='password'
					secureTextEntry
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Input
					placeholder='Profile Picture URL (optional)'
					type='text'
					value={imageUrl}
					onChangeText={(text) => setImageUrl(text)}
					onSubmitEditing={register}
				/>
			</View>
			<Button
				containerStyle={styles.button}
				raised
				onPress={register}
				title='Register'
			/>
		</KeyboardAvoidingView>
	)
}

export default RegisterScreen

const styles = StyleSheet.create({
	container: {},
	inputContainer: {},
	button: {},
})