import React, { useEffect, useState } from "react";
import User from "./components/User";
import api from "./services/api";

// Criando uma interface para poder definir o tipo dos dados que serão recebidos da API
interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, set_users] = useState<IUser[]>([]);
  // Carregar dados assim que o componente é montado em tela
  useEffect(() => {
    api.get<IUser[]>("/users").then((res) => {
      set_users(res.data);
    });
  }, []);
  return (
    <div className="App">
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
