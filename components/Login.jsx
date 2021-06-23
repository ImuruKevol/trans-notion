import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    id: "test",
    pw: "1234",
  });

  const login = async () => {
    const res = await fetch("api/login", {method: "POST", body: JSON.stringify(user)});
    const { login } = await res.json();
    if(!login) {
      alert("login fail!");
      return;
    }
    router.push(`post/${user.id}`)
  }

  return (
    <div>
      <input
        type="text"
        value={user.id}
        onChange={(e) => setUser({ ...user, id: e.target.value })}
      />
      <input
        type="password"
        value={user.pw}
        onChange={(e) => setUser({ ...user, pw: e.target.value })}
      />
      <input type="submit" value="login" onClick={login} />
    </div>
  );
};

export default Login;
