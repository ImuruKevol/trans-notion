import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState, loadingState } from "store";

export default () => {
  const router = useRouter();
  const [loading, setLoading] = useRecoilState(loadingState)
  const [login, setLogin] = useRecoilState(loginState)
  const { id } = router.query;

  useEffect(() => { setLoading(true) }, [])

  useEffect(() => {
    console.log("id: ", id);
    setLoading(false)
    // if (!id) router.back();
  }, [id]);

  useEffect(() => {
    console.log("current login state: ", login.value)
    if (!login.value) router.replace("/")
  }, [login.value])

  return (
    <>
      {loading ?
        <div>loading...</div>
        :
        <div>
          ID : {id}
        </div>
      }
    </>
  );
};
