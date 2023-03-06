import { FlatList, Text, TouchableOpacity } from "react-native";
import { Box, Container } from "./styles";
import { Input } from "@components/Input";
import { useEffect, useState } from "react";

import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@utils/firebase";
import { Todo } from "@components/Todo";

export function Home() {
  const [text, setText] = useState("");
  const [task, setTask] = useState<any[]>([]);

  function addTodo() {
    const listRef = collection(db, "task");
    const q = query(listRef, orderBy("createdAt", "asc"));
    return onSnapshot(q, (querySnapshot) => {
      const list: Array<any> = [];
      querySnapshot.forEach((doc) => {
        const { title, complete } = doc.data();
   

        list.push({
          id: doc.id,
          title,
          complete,
        });
      });


      setTask(list);
    });
  }

  useEffect(() => {
    addTodo();
  }, []);

  return (
    <Container>
      <Text>Hello world!</Text>
      <Box>
        <Input value={text} onChangeText={setText} placeholder="Add task" />
        <TouchableOpacity onPress={() => addTodo()}>
          <Text>Add</Text>
        </TouchableOpacity>
      </Box>
      <FlatList
        data={task}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Todo {...item} />}
      />
    </Container>
  );
}
