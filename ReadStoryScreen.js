import * as React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { Header } from "react-native-elements";

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          backgroundColor={"#F2CEDF"}
          centerComponent={{
            text: "STORY HUB",
            style: { fontSize: 24 },
          }}
        ></Header>
        <TextInput style={styles.titleInput} placeholder="Title of the story" />
        <TextInput
          style={styles.titleInput}
          placeholder="Author of the story"
        />
        <TextInput
          style={styles.contentInput}
          placeholder="Content of the story"
        />
        <TouchableOpacity
          style={{ backgroundColor: "#F2CEDF", margin: 150, width: 100 }}
        >
          <Text style={{ fontSize: 24, textAlign: "center" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleInput: {
    borderWidth: 1.5,
    width: 380,
    marginLeft: 10,
    marginTop: 10,
  },
  contentInput: {
    borderWidth: 1.5,
    width: 380,
    marginLeft: 10,
    marginTop: 10,
    height: 200,
  },
});