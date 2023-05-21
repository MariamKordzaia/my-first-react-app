import icon from '../images/1.png'

const Header = () => {
    return (
        <header>
			<div class="wrapper">
				<figure>
					<a href="./index.html">
						<img class="logo" alt="logo" src={icon}  />
					</a>
				</figure>
				<div class="navigate-button">
					<nav>
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Demo</a>
							</li>
							<li>
								<a href="#">Inner Pages</a>
							</li>
							<li>
								<a href="#">Support</a>
							</li>
							<li>
								<a href="#">Feature</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
						</ul>
					</nav>
					<button>Get started</button>
				</div>
			</div>
		</header>
    );
};
export default Header;