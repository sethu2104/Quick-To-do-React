import List from '@mui/material/List';

import { useState, useEffect } from "react";
import TodoItems from './TodoItems';
import TodoForm from './TodoForm';
import { Box, Typography } from "@mui/material";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
};
const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 3, text: "walk the cat", completed: false },
    { id: 4, text: "walk the fish", completed: true },
    { id: 5, text: "walk the chickens", completed: false },

];
export default function TodoList() {

    const [todos, setTodos] = useState(getInitialData);
    useEffect(() => {
        localStorage.setItem(
            "todos", JSON.stringify(todos));
    }, [todos])
    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        });
    };
    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo, completed: !todo.completed
                    };
                }
                else {
                    return todo;
                }
            });
        });
    };
    const addTodo = (text) => {
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        setTodos((prevTodos) => {
            return [...prevTodos, { text: text, id: newId, completed: false }];
        });
    };
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 3,

        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                    return <TodoItems todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)} />


                })}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );
}


