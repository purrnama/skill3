import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-auto gap-3 items-center py-2 pr-4 pl-3 bg-white rounded-lg border border-solid border-neutral-200 min-h-[40px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d180ede1e5a24e1790ffc4498c2d09888ca77d75df2507d9db1d38978cc0fcb?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <input
        type="text"
        placeholder="Search title..."
        className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis bg-transparent border-none outline-none"
        aria-label="Search title"
      />
    </div>
  );
};

export default SearchBar;