import { useEffect } from 'react';
import useSWR from 'swr';
import Login from "../components/Login";

const Home = () => {
  const { data, error } = useSWR("api/hello");

  useEffect(() => {
    console.log("data: ", data)
    console.log("url: ", process.env.URL)
  }, [data])

  return (
    <div>
      <Login />
    </div>
  )
}

export default Home;
