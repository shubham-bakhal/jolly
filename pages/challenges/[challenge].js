import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import { challengeData } from "../../challengeData";
import Navbar from "../../components/navbar/Navbar";
import Style from "../../styles/challenge.module.scss";

const ChallengeName = () => {
	const router = useRouter();
	const { challenge } = router.query;

	const [currentChallenge, setCurrentChallenge] = useState(null);

	useEffect(() => {
		const current = challengeData.find((c) => c.id === challenge);
		setCurrentChallenge(current);
	}, [challenge]);

	return (
		<>
			{currentChallenge && (
				<div className={Style.container}>
					<Navbar />

					<div className={Style.challenge}>
						<div className="crumb">
							<Link href="/challenges">
								<a>Challenges</a>
							</Link>
							<span>/</span>
							<span>{currentChallenge.title}</span>
						</div>

						<h1>{currentChallenge.title}</h1>
						<p>{currentChallenge.description}</p>
						<button>Join Challenge</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ChallengeName;
