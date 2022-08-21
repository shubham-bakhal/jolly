import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import { challengeData } from "../../challengeData";
import Navbar from "../../components/navbar/Navbar";
import Style from "../../styles/challenge.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import Modal from "../../components/Modal/Modal";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const ChallengeName = () => {
	const router = useRouter();
	const { challenge } = router.query;

	const [currentChallenge, setCurrentChallenge] = useState(null);
	const [user, loading, error] = useAuthState(auth);

	const [showModal, setShowModal] = useState(false);
	const [login, setLogin] = useState(false);

	useEffect(() => {
		// const current = challengeData.find((c) => c.id === challenge);
		// setCurrentChallenge(current);
		if (challenge) {
			getChallenge();
		}

		// getChallenge();
		// console.log(challenge);
	}, [challenge]);

	const handleClick = () => {
		if (user) {
			router.push(`/challenge/${challenge}/workout`);
		} else {
			setShowModal(true);
		}
	};

	const getChallenge = async () => {


		getDoc(doc(db, `challenges/${challenge}`))
			.then((doc) => {
				setCurrentChallenge(doc.data());
				// console.log(doc.data());
			})
			.catch((error) => {
				console.log(error);
			});

	};

	return (
		<>
			{currentChallenge && (
				<div className={Style.container}>
					<Navbar setShowModal={setShowModal} setLogin={setLogin} />
					<Modal
						onClose={() => setShowModal(false)}
						show={showModal}
						login={login}
					/>

					<div className={Style.challenge}>
						{/* {console.log(currentChallenge)} */}
						{user && (
							<div className={Style.crumb}>
								<Link href="/challenges">
									<a>Challenges</a>
								</Link>
								<span>/</span>
								<span>{currentChallenge.title}</span>
							</div>
						)}

						<h1>{currentChallenge.title}</h1>
						<p>{currentChallenge.description}</p>
						<button onClick={handleClick}>Join Challenge</button>
						<div className={Style.days}>
							{
								currentChallenge.days.map((day) => {
									return (
										<button className={Style.day} key={day.day} onClick={handleClick}>
											
											<p>day {day.day}</p>
										</button>
									);
								}
								)
							}
							{/* <div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div>
							<div className={Style.day}>Day 1</div> */}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ChallengeName;
