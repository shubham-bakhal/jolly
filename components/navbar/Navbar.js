import Style from "./Navbar.module.scss";
import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";


const Navbar = () => {


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
						<div className={Style.profile}></div>
					</div>
				) : (
					<div className={Style["nav-right"]}>
						<Link href="/login">
							<button>Log in</button>
						</Link>
						<Link href="/signup">
							<button>Sign up</button>
						</Link>
					</div>
				)}
				{/* <div className={Style.profile}>Manish</div> */}
			</div>
		</nav>
	);
};

export default Navbar;
