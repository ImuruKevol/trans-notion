import { useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { loginState } from "store";

const Login = () => {
  const [login, setLogin] = useRecoilState(loginState)
  const [user, setUser] = useState({
    id: "test",
    pw: "1234",
  });

  const onLogin = async () => {
    // const res = await fetch("api/login", { method: "POST", body: JSON.stringify(user) });
    // const { login } = await res.json();
    // if (!login) {
    //   alert("login fail!");
    //   return;
    // }
    // router.push(`post/${user.id}`)
    setLogin({
      ...login,
      value: true,
    })
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
      <input type="submit" value="login" onClick={onLogin} />
      <Link href="/post/1234">
        <a>go to post "1234"</a>
      </Link>
    </div>
  );
};

export default Login;
