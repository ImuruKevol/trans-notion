import { useEffect } from 'react';
import useSWR from 'swr';
import style from 'styles/Home.module.scss'
import Toolbox from "components/editor/Toolbox";

export default function Home() {
  const { data, error } = useSWR("api/hello");

  useEffect(() => {
    console.log("data: ", data)
    console.log("url: ", process.env.URL)
  }, [data])


  return (
    <div className={style.test}>
      test
      <h1>test header 1</h1>
      <h2>{process.env.NODE_ENV}</h2>
      <h2>{process.env.URL}</h2>
      <Toolbox />
    </div>
  )
}
