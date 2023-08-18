import {headerLogo} from '../assets/images';
import {navLinks} from '../constants';
const Nav = () => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between max-container">
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={29} />
				</a>
				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								className="font-monts errat leading-normal text-lg text-slate-gray">
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
