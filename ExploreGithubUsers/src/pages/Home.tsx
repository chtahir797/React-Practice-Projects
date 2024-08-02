import Popular from "../components/Popular/Popular";
import { useState } from "react";
import Search from "../components/Search/Search";
import User from "../components/User/User";
import DarkMode from "../components/DarkMode/DarkMode";

const Home = () => {
  const [query, setQuery] = useState<string>("");

  const getQuery = (value: string): void => {
    setQuery(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center">
      <Search getQuery={getQuery} />
      <DarkMode/>
      <div className="mt-6 w-full max-w-6xl">
        {query ? <User username={query} /> : <Popular />}
      </div>
    </div>
  );
};

export default Home;
