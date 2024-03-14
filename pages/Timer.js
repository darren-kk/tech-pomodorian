import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Time from "../components/Time";
import { useState } from "react";

import { TIME_MINUTES } from "../constants";

export default function Timer() {
  const [timerCount, setTimerCount] = useState(TIME_MINUTES.pomodoro);
  const [timerId, setTimerId] = useState(null);
  const [mode, setMode] = useState("pomodoro");

  function startTimer() {
    if (!timerId) {
      const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
      setTimerId(id);
    }
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  }

  function handleModeChange(mode) {
    stopTimer();
    setMode(mode);
    setTimerCount(TIME_MINUTES[mode]);
  }

  const minutes = Math.floor(timerCount / 60000);
  const seconds = Math.floor((timerCount % 60000) / 1000);

  const colorByMode =
    mode === "pomodoro"
      ? "#EC2D01"
      : mode === "shortBreak"
      ? "#4E9196"
      : "#4F7FA2";

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.timerContainer,
          { backgroundColor: colorByMode, borderColor: colorByMode },
        ]}
      >
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[
              styles.menuButton,
              mode === "pomodoro" && styles.activeButton,
            ]}
            onPress={() => handleModeChange("pomodoro")}
          >
            <Text style={[styles.menuText, { color: colorByMode }]}>
              포모도로
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuButton,
              mode === "shortBreak" && styles.activeButton,
            ]}
            onPress={() => handleModeChange("shortBreak")}
          >
            <Text style={[styles.menuText, { color: colorByMode }]}>
              짧은 휴식
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.menuButton,
              mode === "longBreak" && styles.activeButton,
            ]}
            onPress={() => handleModeChange("longBreak")}
          >
            <Text style={[styles.menuText, { color: colorByMode }]}>
              긴 휴식
            </Text>
          </TouchableOpacity>
        </View>
        <Time minutes={minutes} seconds={seconds}></Time>
      </View>
      <View style={styles.buttonContainer}>
        {!timerId ? (
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={[styles.buttonText, { color: colorByMode }]}>
              시작!
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={stopTimer}>
            <Text style={[styles.buttonText, { color: colorByMode }]}>
              중지!
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#A1CBA1",
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 350,
    height: 250,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 50,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  menuButton: {
    width: "auto",
    height: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "center",
  },
  button: {
    width: 200,
    height: 70,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },
});
