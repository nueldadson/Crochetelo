export default function Button({ className = "", children = "Shop Now" }) {
	return (
		<a
			href="/shop"
			className={`px-14 py-3 text-center w-fit h-fit bg-white text-gray-800 font-semibold rounded-3xl shadow hover:bg-gray-200 transition-colors duration-300 ${className}`}
			aria-label={children}
		>
			{children}
		</a>
	);
}
