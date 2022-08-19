import Head from "next/head";
import Image from "next/image";
import Style from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={Style.App}>
			<nav>
				<div className={Style.navContent}>
					<div className={Style.logo}>
						<h1>Fitmate</h1>
					</div>
					<div className={Style["nav-right"]}>
						{/* <button>Sign up</button>
						<button>Log in</button> */}
						{/* <button>Create a challenge</button> */}
						<div className={Style.profile}></div>
					</div>
					{/* <div className={Style.profile}>Manish</div> */}
				</div>
			</nav>
			<div className={Style.container}>
				<div className={Style["challenge-container"]}>
					<div className={Style["challenge-heading"]}>
						<h3>Challenges</h3>
						<div>
							<button>View All</button>
						</div>
					</div>

					<div className={Style["challenges"]}>
						<div className={Style.challenge}></div>
						<div className={Style.challenge}></div>
						<div className={Style.challenge}></div>
						<div className={Style.challenge}></div>
						<div className={Style.challenge}></div>
						<div className={Style.challenge}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
