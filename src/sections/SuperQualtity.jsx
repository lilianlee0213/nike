import Button from '../components/Button';
const SuperQualtity = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
			<div className="flex flex-1 flex-col">
				<h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">
					We provide you
					<span className="text-coral-red"> Super </span>
					<span className="text-coral-red"> Quality </span> Shoes
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate you expeirence providing you with unmatched
					quality, innovation, and a touch of elegance
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Our detication to detail to exellence ensures your satisfaction
				</p>
				<div className="mt-11 ">
					<Button label="View details" />
				</div>
			</div>
		</section>
	);
};

export default SuperQualtity;
