import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Content } from "./src/components/Content";
import { Header } from "./src/components/Header";

export interface Task {
  id: number;
  content: string;
  concluded: boolean;
}

export default function App() {
  const [currentId, setCurrentId] = useState(1);
  const [tasks, setTasks] = useState<Task[]>([]);

  function sortTasks(tasks: Task[]): Task[] {
    const tempTasks = tasks;

    tempTasks.sort((a, b) => a.id - b.id);

    return tempTasks;
  }

  function addTask(task: string) {
    setTasks((oldValue) =>
      sortTasks([
        ...oldValue,
        {
          id: currentId,
          content: task,
          concluded: false,
        },
      ])
    );
    setCurrentId((oldValue) => oldValue + 1);
  }

  function removeTask(taskId: number) {
    setTasks((oldValue) =>
      sortTasks([...oldValue.filter((task) => task.id !== taskId)])
    );
  }

  function toggleTask(taskId: number) {
    const tempTask = tasks.find((task) => task.id === taskId);

    if (!tempTask) return;

    tempTask.concluded = !tempTask.concluded;

    setTasks((oldValue) =>
      sortTasks([...oldValue.filter((task) => task.id !== taskId), tempTask])
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <Header addTask={addTask} />
      <Content tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
});
