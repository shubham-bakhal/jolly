import {useRouter} from "next/router";

const ChallengeName = () => {

    const router = useRouter();
    const {challengeName} = router.query;



  return (
    <div>
        <h1>{challengeName}</h1>
    </div>
  )
}

export default ChallengeName