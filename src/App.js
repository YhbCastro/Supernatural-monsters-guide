import "./App.css";
import React, { useState }  from "react";
import MonsterData from "./MonsterData";
import MonsterCreate from "./MonsterCreate";
import MonsterList from "./MonsterList";
import Footer from "./Footer";

function App() {
  const initialFormState = {
    id: "",
    name: "",
    prey: "",
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
      <header className="Header">
        <img src="logoBig.png" alt="logo" className="Logo"/>
        <h1 className="Tittle">Monsters Guide</h1>
      </header>
      <body>
        <div className="textBox">
        <p className="text">Made by hunters for hunters</p>
        <p className="text">Monsters are supernatural creatures with extraordinary strength and powers and abilities. In this guide you can see their different abilities and how to identify a monster. The weakness can show how the monster can be killed or weakened. Feel free to add any other monsters that you find in your hunt.</p>
        </div>

        <table >
            <thead className="Content">
            <tr>
              <th className="ContentCollunm">Name</th>
              <th className="ContentCollunm">Prey</th>
              <th className="ContentCollunm">Appearance</th>
              <th className="ContentCollunm">Abilities</th>
              <th className="ContentCollunm">Weaknesses</th>
              <th className="ContentCollunm">Photo</th>
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
     </body>
     <footer>
      <Footer/>
     </footer>

    </div>
  )
}

export default App;