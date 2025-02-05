import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

export const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative flex items-center w-full max-w-[300px] sm:max-w-[350px]">
      <SearchIcon className="absolute left-3 text-gray-400" size={20} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск студента"
        className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-600 placeholder-gray-400 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300 sm:text-base text-sm"
      />
    </div>
  );
};
