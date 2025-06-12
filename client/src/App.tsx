import Navbar from "../src/components/Navbar";
import { Container, Stack } from "@chakra-ui/react";

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        {/* <TodoForm />
        <TodoList /> */}
      </Container>
    </Stack>
  );
}

export default App;
