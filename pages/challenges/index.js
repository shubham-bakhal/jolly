import Style from "../../styles/challenges.module.scss";
import { challengeData } from "../../challengeData";
import Navbar from "../../components/navbar/Navbar";
import Link from "next/link";

const Challenges = () => {
	return (
		<>
			<Navbar />
			<div className={Style.container}>
				<div className={Style["challenges"]}>
					{challengeData.map((c) => (
						<div className={Style.challenge}>
							<h3>{c.title}</h3>
							{/* <p>{challenge.description}</p> */}
							<Link href={`/challenges/${c.id}`}>more info</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Challenges;
