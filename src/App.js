import "./App.css";
import React, { useState }  from "react";
import MonsterData from "./MonsterData";
import MonsterCreate from "./MonsterCreate";
import MonsterList from "./MonsterList";

function App() {
  const initialFormState = {
    id: "",
    name: "",
    appearance: "",
    abilities: "",
    weaknesses: "",
    photo: "",
  }
  const [monsters, setMonsters] = useState(MonsterData)
  const [formData, setFormData] = useState({...initialFormState})
  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      <header><h1>Monsters Guide</h1></header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Appearance</th>
            <th>Abilities</th>
            <th>Weaknesses</th>
            <th>Photo</th>
          </tr>
        </thead>
      </table>

    <MonsterList 
      posts={monsters} 
      setPosts={setMonsters} 
      />
    <MonsterList 
      posts={posts} 
      setPosts={setPosts} 
      />
    <MonsterCreate
     initialFormState={initialFormState}
     formData={formData}
     setFormData={setFormData}
     posts={posts}
     setPosts={setPosts}
     />

    </div>
  )
}

export default App;