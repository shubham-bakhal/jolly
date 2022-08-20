import Navbar from "../components/navbar/Navbar";
import Style from "../styles/make.module.scss";
import Modal from "../components/Modal/Modal";
import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Make = () => {
	const [showModal, setShowModal] = useState(false);
	const [login, setLogin] = useState(false);

	const [user, loading, error] = useAuthState(auth);

	useEffect(() => {
    if (user) return
    if (loading) return
		if (!user) {
			setShowModal(true);
		}
	}, []);

	const handleSubmit = () => {};

	return (
		<div className={Style.App}>
			<Navbar setShowModal={setShowModal} setLogin={setLogin} />
			<Modal
				onClose={() => setShowModal(false)}
				show={showModal}
				login={login}
			/>
			<div className={Style.container}>
				{user ? (
					<div className={Style.make}>
						<form onSubmit={handleSubmit}>
							<div className={Style.formField}>
								<label>Title</label>
								<input
									placeholder="Title"
									required
									// onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className={Style.formField}>
								<label>description</label>
								<textarea
									placeholder="description"
									required
									// onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className={Style.formField}>
								<label>Rules</label>
								<textarea
									placeholder="Rules"
									required
									// onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className={Style.formField}>
								<label>duration (days)</label>
								<input
									type={"number"}
									placeholder="description"
									required
                  defaultValue={30}
									// onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<button type="submit" className={Style.submitBtn}>
								Publish
							</button>
						</form>
					</div>
				) : (
					"Please login/signup to continue"
				)}
			</div>
		</div>
	);
};

export default Make;
