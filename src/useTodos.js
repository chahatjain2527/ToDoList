import { useEffect, useState } from "react";

function useTodos() {

    // 🔹 Load todos from localStorage
    const getInitialTodos = () => {
        const stored = localStorage.getItem("appData");
        return stored ? JSON.parse(stored) : { user: null, todos: [] };
    };

    // 🔹 Main state
    const [appData, setAppData] = useState(getInitialTodos);
    //   const [selectedTodo, setSelectedTodo] = useState(null);
    const [editTodo, setEditTodo] = useState(null);

    // 🔹 Save to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem("appData", JSON.stringify(appData));
    }, [appData]);

    // 🔹 Delete todo
    const deleteTodo = (item) => {
        if (item.status === true) {
            if (!window.confirm("Task is not completed. Delete anyway?")) return;
        }

        const updatedTodos = appData.todos.filter((t) => t.sNo !== item.sNo);
        setAppData({ ...appData, todos: updatedTodos });
    };

    // 🔹 Prepare todo for update
    const updateTodo = (item) => {
        setEditTodo(item); // put in edit mode
    };

    const saveTodo = (title, description) => {
        if (editTodo) {
            // 🔹 UPDATE MODE
            const updatedTodos = appData.todos.map((t) =>
                t.sNo === editTodo.sNo
                    ? { ...t, title, description }
                    : t
            );

            setAppData({ ...appData, todos: updatedTodos });
            setEditTodo(null);
        } else {
            // 🔹 ADD MODE
            const newTodo = {
                sNo: Date.now(),
                title,
                description,
                status: true
            };

            setAppData({ ...appData, todos: [...appData.todos, newTodo] });
        }
    };

    // 🔹 Mark as done
    const markDone = (item,flag) => {
        console.log("Item=>",item," Flag=>",flag);
        const updatedTodos = appData.todos.map((t) => {
            if (t.sNo === item.sNo) {
                return { ...t, status: flag }; // safer & clearer
            }
            return t;
        });

        setAppData({ ...appData, todos: updatedTodos });
    };
    const saveUser = (name) => {
        setAppData((prev) => ({
            ...prev,
            user: name
        }));
    };
    const resetData = () => {
        localStorage.removeItem("appData");
        setAppData({ user: null, todos: [] });
    };
    return {
        appData,
        editTodo,
        deleteTodo,
        updateTodo,
        saveTodo,
        markDone,
        saveUser,
        setEditTodo,
        resetData
    };

}

export default useTodos;