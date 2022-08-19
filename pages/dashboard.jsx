import Style from "../styles/dashboard.module.scss";

const Dashboard = () => {
	return (
		<div className={Style.App}>
			<nav>
				<div className={Style.navContent}>
					<div className={Style.logo}>Fitmate</div>
					<div className={Style.profile}>Manish</div>
				</div>
			</nav>
			<div className={Style.container}>
                <h3>Challenges</h3>
            </div>
		</div>
	);
};

export default Dashboard;
