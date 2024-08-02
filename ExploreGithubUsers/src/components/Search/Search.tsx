import { useState } from "react";

interface GetQuery {
  getQuery: (query: string) => void;
}

const Search = ({ getQuery }: GetQuery) => {
  const [username, setUsername] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);

  const handleSearch = (): void => {
    getQuery(username);
    setSearched(true); 
  };

  const handleClear = (): void => {
    getQuery("");
    setUsername("");
    setSearched(false); 
  };

  return (
    <header className="flex justify-center items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        className="border border-indigo-400 dark:border-indigo-600 rounded-l-md px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200 w-full md:w-64 dark:bg-gray-900 dark:text-white"
      />
      {searched ? (
        <button
          onClick={handleClear}
          className="bg-indigo-500 border border-indigo-500 rounded-r-md px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 dark:bg-indigo-600 dark:border-indigo-700"
        >
          Clear
        </button>
      ) : (
        <button
          onClick={handleSearch}
          className="bg-indigo-500 border border-indigo-500 rounded-r-md px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 dark:bg-indigo-600 dark:border-indigo-700"
        >
          Search
        </button>
      )}
    </header>
  );
};

export default Search;
