import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [users, setUsers] = useState({ name: "", email: "", id: "" });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="App">
      {users.length > 0 ? (
        users.map((elt) => 
          (<div key={elt.id}>
            <h1>{elt.name}</h1>
            <h2>{elt.email}</h2>
          </div>)
        )
      ) : (
        <h1>'Loading'</h1>
      )}
    </div>
  );
}

export default App;

