import { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(id);
    // if (!id) router.back();
  }, [id]);

  return <>ID : {id}</>;
};
