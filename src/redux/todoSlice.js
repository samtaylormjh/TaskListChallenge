import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
    if (res.ok) {
      const todos = await res.json()
      return { todos }
    }
  }
)

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { userId: 1, id: 1, title: "todo1", completed: false },
    { userId: 1, id: 2, title: "todo2", completed: false },
    { userId: 1, id: 3, title: "todo3", completed: true }
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        userId: 1,
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id
      )
    },
    
    // I wasnt sure how I might update a selected todo, I've done this in the past but inside a database.
    editTodo: (state, action) => {
      const updateTodo = {
        userId: 1,
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.push(updateTodo)
    }
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos
    }
  },
})

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  editTodo
} = todoSlice.actions

export default todoSlice.reducer
