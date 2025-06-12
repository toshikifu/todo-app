import TodoList from "../src/components/TodoList";
import TodoForm from "../src/components/TodoForm";
import Navbar from "../src/components/Navbar";
import { Container, Stack } from "@chakra-ui/react";

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "/api";

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
