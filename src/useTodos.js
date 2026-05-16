import { useEffect, useState } from "react";
import { json } from "react-router-dom";

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
        const sortedData = [...appData.todos].sort((a,b)=>{
            if(a.isFavorite !== b.isFavorite) {// favrite task comes first
                return b.isFavorite - a.isFavorite;
            }

            if(a.status !== b.status) { //done task comes last
                return b.status - a.status;
            }
            return new Date(b.sNo) - new Date(a.sNo); // newer task comes first
        });
        //setAppData(prev => ({ ...prev, todos: sortedData }));
        const isDifferent =
        JSON.stringify(sortedData) !== JSON.stringify(appData.todos);

    if (isDifferent) {
        setAppData(prev => ({
            ...prev,
            todos: sortedData
        }));
    }
    }, [appData,appData.todos]);

    // 🔹 Delete todo
    const deleteTodo = (item) => {
        if (item.status === true && item.isFavorite === true) { //status true means not completed
            if (!window.confirm("Task is favorite and not completed. Delete anyway?")) return;
        }
        if (item.status === true) { //status true means not completed
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
                status: true, //status true means not completed
                isFavorite: false
            };

            setAppData({ ...appData, todos: [...appData.todos, newTodo] });
        }
    };

    // 🔹 Mark as done
    const markDone = (item,flag) => {
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
        var data = JSON.parse(localStorage.getItem("appData"));
        if(data && data.todos && data.todos.length > 0) {
            if (!window.confirm("Reset will clear all your tasks and log you out. Are you sure?")) return;
        }
        localStorage.removeItem("appData");
        setAppData({ user: null, todos: [] });
    };

    const markFavorite = (item,flag) => {
        const updatedTodos = appData.todos.map((t) => {
            if(t.sNo === item.sNo) {
                return { ...t, isFavorite: flag };
            }
            return t;
        });
        setAppData({ ...appData, todos: updatedTodos });
    }

    return {
        appData,
        editTodo,
        deleteTodo,
        updateTodo,
        saveTodo,
        markDone,
        saveUser,
        setEditTodo,
        resetData,
        markFavorite
    };

}

export default useTodos;