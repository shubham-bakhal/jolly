import Style from "./Navbar.module.scss";
import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { logout } from "../../firebase";

const Navbar = ({ setShowModal, setLogin }) => {
	const [user, loading, error] = useAuthState(auth);

	return (
		<nav className={Style.container}>
			<div className={Style.navContent}>
				<div className={Style.logo}>
					<Link href="/">
						<h1>Fitmate</h1>
					</Link>
				</div>
				{user ? (
					<div className={Style["nav-right"]}>
						{/* <button>Sign up</button>
						<button>Log in</button> */}
						{/* <button>Create a challenge</button> */}
						<Link href="/challenges">Challenges</Link>
						<div className={Style.profile}></div>
						<button onClick={logout}>Log out</button>
					</div>
				) : (
					<div className={Style["nav-right"]}>
						{/* <Link href="/login"> */}
						<button
							onClick={() => {
								setShowModal(true);
								setLogin(true);
							}}
						>
							Log in
						</button>
						{/* </Link> */}
						{/* <Link href="/signup"> */}
						<button
							onClick={() => {
								setShowModal(true);
								setLogin(false);
							}}
						>
							Sign up
						</button>
						{/* </Link> */}
					</div>
				)}
				{/* <div className={Style.profile}>Manish</div> */}
			</div>
		</nav>
	);
};

export default Navbar;
