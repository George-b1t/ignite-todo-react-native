import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Logo } from "./Logo";
import { useState } from "react";

interface HeaderProps {
  addTask: (task: string) => void;
}

function Header({ addTask }: HeaderProps) {
  const [currentTask, setCurrentTask] = useState("");

  function handleAddTask() {
    addTask(currentTask);
    setCurrentTask("");
  }

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.newTask}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={currentTask}
          onChangeText={setCurrentTask}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleAddTask()}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { Header };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 127,
    backgroundColor: "#0D0D0D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    zIndex: 10,
  },
  newTask: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 24,

    position: "absolute",
    bottom: -27,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    borderRadius: 6,
    paddingHorizontal: 16,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    marginLeft: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
