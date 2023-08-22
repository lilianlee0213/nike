const Button = ({
	label,
	iconUrl,
	borderColor,
	backgroundColor,
	textColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex justify-between items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
				backgroundColor
					? `${backgroundColor} ${borderColor} ${textColor}`
					: ' bg-coral-red  text-white border-coloral-red'
			} ${fullWidth && 'w-full'}`}>
			{label}
			{iconUrl && (
				<img
					src={iconUrl}
					alt="arrow right icon"
					className="ml-2 rounded-full w-5 h-5"
				/>
			)}
		</button>
	);
};

export default Button;
