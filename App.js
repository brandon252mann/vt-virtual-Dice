import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const dieImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dice-0.svg/768px-Dice-0.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCoZ9S_uqsrgbR5T0j8RxzY_QqLA4MFQxxOZ7ikDB9orVwjPT6&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/557px-Dice-3-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/557px-Dice-5-b.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/557px-Dice-6-b.svg.png",
];

class App extends React.Component {
  state = {
    dieA: 0,
    dieB: 0,
  };

  rollDie = () => {
    this.setState({
      dieA: Math.floor(Math.random() * 6) + 1,
      dieB: Math.floor(Math.random() * 6) + 1,
    });
  };

  renderRolledDie() {
    let imageA = dieImages[this.state.dieA];
    let imageB = dieImages[this.state.dieB];
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: imageA }}
          style={{ width: 100, height: 100, marginRight: 5 }}
        />
        <Image
          source={{ uri: imageB }}
          style={{ width: 100, height: 100, marginLeft: 5 }}
        />
      </View>
    );
  }

  renderRollButton() {
    return (
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={{ backgroundColor: "red" }}
          onPress={this.rollDie}
        >
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
            Roll Dice
          </Text>
          <Image
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2018/09/30/15/14/dice-3713718_960_720.jpg",
            }}
            style={{ width: 150, height: 150 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}>
          {" "}
          Virtual Dice
        </Text>
        {this.renderRolledDie()}
        {this.renderRollButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
