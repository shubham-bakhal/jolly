import Style from "../../styles/challenges.module.scss";
import { challengeData } from "../../challengeData";
import Navbar from "../../components/navbar/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Challenges = () => {
	const [showModal, setShowModal] = useState(false);

	const[ challenges, setChallenges ] = useState([]);


	useEffect(() => {


		getChallenges();

	}, [])


	const getChallenges = async () => {
		const snapshot = await getDocs(collection(db, "challenges"));
		const data = snapshot.docs.map(doc => doc.data());
		setChallenges(data);
	}

	return (
		<>
			<Navbar setShowModal={setShowModal} />
			{/* {showModal && ( */}
				<Modal onClose={() => setShowModal(false)} show={showModal} />
			{/* )} */}
			<div className={Style.container}>
				<div className={Style["challenges"]}>
					{challenges.map((c) => (
						<div className={Style.challenge} key={c.id}>
							<h3>{c.title}</h3>
							<p>{c.description}</p>
							<Link href={`/challenges/${c.id}`}>more info</Link>
						</div>
					))}

					
				</div>
			</div>
		</>
	);
};

export default Challenges;
