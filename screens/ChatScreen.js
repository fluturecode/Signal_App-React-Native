import React, { useLayoutEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Avatar } from "react-native-elements"

const ChatScreen = ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Chat",
			headerBackTitleVisible: false,
			headerTitleAlign: "left",
			headerTitle: () => (
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}>
					<Avatar
						rounded
						source={{
							uri:
								"https:/cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
						}}
					/>
					<Text style={{ color: "white", marginLef: 10, fontWeight: "700" }}>
						{route.params.chatName}
					</Text>
				</View>
			),
		})
	}, [navigation])

	return (
		<View>
			<Text>{route.params.chatName}</Text>
		</View>
	)
}

export default ChatScreen

const styles = StyleSheet.create({})