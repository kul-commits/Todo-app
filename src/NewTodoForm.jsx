 import { useState } from "react"

    export function NewTodoForm({ onSubmit }) {
      const [newItem, setNewItem] = useState("")
    
      function handleSubmit(e) {
        e.preventDefault()
        if (newFunction()) return
    
        onSubmit(newItem)
    
        setNewItem("")
    
          function newFunction() {
              return newItem === ""
          }
      }
    
      return (
        <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              type="text"
              id="item"
            />
          </div>
          <button className="btn">Add</button>
        </form>
      )
    }

  

