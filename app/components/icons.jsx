export const ArrowIcon = ({ className, color }) => (
	<svg viewBox="0 0 60 69" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
		<path
			d="M36.0751 16.8516L51.2501 34.1013L36.0751 51.3509"
			// stroke="#3A3A3A"
			strokeWidth="4"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={color}
		/>
		<path
			d="M8.75 34.1015H50.825"
			// stroke="#3A3A3A"
			strokeWidth="4"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={color}
		/>
	</svg>
);
export const ArrowDownICon = ({ className, color, stroke }) => (
	<svg
		// width="17"
		// height="16"
		viewBox="0 0 17 16"
		fill="none"
		className={className}>
		<path
			d="M13.283 5.95711L9.00385 10.3016C8.4985 10.8147 7.66104 10.8137 7.14283 10.2995L2.75488 5.94531"
			// stroke="white"
			className={color}
			strokeWidth={stroke ? stroke : '1.5'}
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
