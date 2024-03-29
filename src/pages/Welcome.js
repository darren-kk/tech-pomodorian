import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import PomodoroDescription from "../components/PomodoroDescription";

export default function Welcome({ navigation }) {
  const [toggleExplanation, setToggleExplanation] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tech-Pomodorian</Text>
      <Image
        style={styles.Timer}
        source={require("../../assets/pomodoroTimer.png")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Timer")}
      >
        <Text style={styles.buttonText}>뽀모도로 시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => setToggleExplanation(!toggleExplanation)}
      >
        <Text style={styles.toggleText}>뽀모도로란? 🍅</Text>
      </TouchableOpacity>
      {toggleExplanation && (
        <PomodoroDescription
          navigation={navigation}
          toggleExplanation={toggleExplanation}
          setToggleExplanation={setToggleExplanation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A1CBA1",
    paddingHorizontal: 15,
    paddingVertical: 200,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  toggle: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    margin: 20,
    alignSelf: "center",
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#374151",
    textAlign: "center",
  },
  Timer: {
    width: 150,
    height: 150,
    margin: 50,
  },
  button: {
    padding: 15,
    backgroundColor: "#EC2D01",
    borderColor: "#EC2D01",
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
