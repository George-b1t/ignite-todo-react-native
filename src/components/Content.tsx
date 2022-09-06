import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Task } from "../../App";

interface ContentProps {
  tasks: Task[];
  removeTask: (taskId: number) => void;
  toggleTask: (taskId: number) => void;
}

function Content({ tasks, removeTask, toggleTask }: ContentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <View style={styles.contentHeaderItem}>
          <Text style={{ fontWeight: "bold", color: "#4EA8DE" }}>Criadas</Text>
          <Text style={styles.quantityInformation}>{tasks.length}</Text>
        </View>
        <View style={styles.contentHeaderItem}>
          <Text style={{ fontWeight: "bold", color: "#8284FA" }}>
            Concluídas
          </Text>
          <Text style={styles.quantityInformation}>
            {tasks.filter((task) => task.concluded).length}
          </Text>
        </View>
      </View>

      {tasks.length === 0 ? (
        <View style={styles.contentMainNoTask}>
          <Feather name="clipboard" color="#3D3D3D" size={70} />
          <Text style={{ fontWeight: "bold", color: "#808080", marginTop: 16 }}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={{ color: "#808080" }}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.task}>
              <TouchableOpacity
                style={styles.taskToggle}
                onPress={() => toggleTask(item.id)}
              >
                {item.concluded ? (
                  <AntDesign name="checkcircle" size={18} color="#5E60CE" />
                ) : (
                  <Entypo name="circle" size={18} color="#4EA8DE" />
                )}
              </TouchableOpacity>
              {item.concluded ? (
                <Text style={styles.taskContentThrough}>{item.content}</Text>
              ) : (
                <Text style={styles.taskContent}>{item.content}</Text>
              )}
              <TouchableOpacity
                style={styles.taskRemove}
                onPress={() => removeTask(item.id)}
              >
                <FontAwesome5 name="trash-alt" size={18} color="#808080" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

export { Content };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 55,
    paddingHorizontal: 24,
  },
  contentHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  contentHeaderItem: {
    display: "flex",
    flexDirection: "row",
  },
  quantityInformation: {
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 12,
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginLeft: 8,
  },
  contentMainNoTask: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingTop: 48,
    display: "flex",
    alignItems: "center",
  },
  task: {
    backgroundColor: "#262626",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskContent: {
    color: "#F2F2F2",
    flex: 1,
  },
  taskContentThrough: {
    color: "#808080",
    textDecorationLine: "line-through",
    flex: 1,
  },
  taskToggle: {
    marginRight: 15,
  },
  taskRemove: {
    width: 20,
    height: 20,
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
