import React from 'react';

export const InputField = ({ title, type, placeholder, defaultvalue, value }) => {
	return (
		<div className="min-h-[46px]">
			<p className="text-white text-[18px] max-2xl:text-[16px] max-md:text-[14px] mb-[10px]">{title}</p>
			<input
				type={type}
				className="w-full bg-white text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-[#2a2a2a] placeholder:text-[#808080] p-[10px_12px] outline-none"
				placeholder={placeholder}
				value={value}
				defaultvalue={defaultvalue}
			/>
		</div>
	);
};
export const TextAreaField = ({ title, placeholder, value,rows }) => {
	return (
		<div className="min-h-[46px]">
			<p className="text-white text-[18px] max-2xl:text-[16px] max-md:text-[14px] mb-[10px]">{title}</p>
			<textarea
				className="w-full bg-white text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-[#2a2a2a] placeholder:text-[#808080] p-[10px_12px] outline-none"
				placeholder={placeholder}
				value={value}
                rows={rows}
			/>
		</div>
	);
};
