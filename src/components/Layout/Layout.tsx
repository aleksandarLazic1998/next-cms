import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
	return (
		<div className="layout">
			<header>
				<Link href="/">
					<h1>
						<span>Just Add</span>
						<span>Marmite</span>
					</h1>
					<h2>Spread The Joy</h2>
				</Link>
			</header>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright {new Date().getFullYear()}</p>
			</footer>
		</div>
	);
};
