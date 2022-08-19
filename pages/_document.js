import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* FONTS */}
					{/* <script
						async
						defer
						src="https://beampipe.io/js/tracker.js"
						data-beampipe-domain="drag-me.vercel.app"
					/> */}
					<script
						async
						defer
						data-website-id="b11e21d8-1ceb-46c2-976d-1ae170412078"
						src="https://umami-fork.vercel.app/umami.js"
					></script>


					<link
						href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap"
						rel="stylesheet"
					/>
					{/* FAVICONS */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicons/site.webmanifest" />
					<meta
						name="msapplication-config"
						content="/favicons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#FF0066" />
					<meta name="theme-color" content="#FF0066" />
				</Head>
				<head
					dangerouslySetInnerHTML={{
						__html: "<!--  Well hello there you nosey little shit  -->",
					}}
				></head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
