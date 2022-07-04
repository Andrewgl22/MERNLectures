function App() {

    const [todo, setTodo] = useState("")
    const [list,setList] = useState([])
  
    // We need a function to add a todo item
    const addToList = (e) => {
      e.preventDefault()
      let myTodo = {
        todo:todo,
        checked:false
      }
      setList([...list,myTodo])
      setTodo("")
    }
  
    // we need a function to delete an item
    const deleteItem = (id) => {
      const newList = list.filter((todo,i)=>{
        return id !== i;
      })
      setList(newList)
    }
  
    // we need a function to change whether item is checked or not
    const changeCheck = (id) => {
      const newList = list.map((todo,idx)=>{
        if(id == idx){
          todo.checked = !todo.checked
        }
        return todo
      })
      setList(newList)
    }
  
    return (
      <div className="App">
        <form onSubmit={(e)=>addToList(e)}>
          <label>To Do: </label>
          <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}  />
          <button>Submit</button>
        </form>
        {
          list.map((todo,idx)=>{
            return <div key={idx}>
              <p className={todo.checked ? "strike-through" : ""}>{todo.todo}</p>
              <input type="checkbox" checked={todo.checked} onChange={(e)=>changeCheck(idx)}></input>
              <button onClick={(e)=>deleteItem(idx)}>Delete</button>
            </div>
          })
        }
    </div>
    )
    }