import './globals.css'

export const metadata = {
	title: 'Futuristic Portfolio',
	description: 'Personal portfolio showcasing projects',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
 