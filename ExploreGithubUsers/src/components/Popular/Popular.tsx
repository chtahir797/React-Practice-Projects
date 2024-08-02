import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string; // Add this to get the repository URL
}

const POPULAR_REPOS_KEY = "popularRepos";

const Popular = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["popularRepos"],
    queryFn: getPopularRepo,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(9);

  const handleNext = () => {
    const totalItems = data?.items.length || 0;
    if (endPage >= totalItems) {
      setStartPage(0);
      setEndPage(9);
    } else {
      setStartPage((prev) => prev + 9);
      setEndPage((prev) => prev + 9);
    }
  };

  const handlePrevious = () => {
    if (startPage === 0) return;
    setStartPage((prev) => Math.max(prev - 9, 0));
    setEndPage((prev) => Math.max(prev - 9, 9));
  };

  async function getPopularRepo() {
    const cachedData = localStorage.getItem(POPULAR_REPOS_KEY);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const response = await axios.get(
      `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc`
    );
    localStorage.setItem(POPULAR_REPOS_KEY, JSON.stringify(response.data));
    return response.data;
  }

  useEffect(() => {
    getPopularRepo();
  }, [startPage, endPage]);

  if (isLoading) {
    return <h1 className="text-center text-xl text-gray-900 dark:text-gray-100">Loading ...</h1>;
  }

  if (isError) {
    return <h1 className="text-center text-xl text-red-500 dark:text-red-400">{error.message}</h1>;
  }

  return (
    <div className="w-[90%] mx-auto p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-center text-3xl text-indigo-600 font-bold mb-6 dark:text-indigo-400">Popular Repositories</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data?.items.slice(startPage, endPage).map((repo: Repo) => (
          <div
            key={repo.id}
            onClick={() => window.open(repo.html_url, "_blank")}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer hover:bg-indigo-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-indigo-600 hover:dark:text-gray-100 transition duration-300 ease-in-out transform hover:scale-105 w-80 min-h-[150px]"
          >
            <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-100">{repo.name.toUpperCase()}</h2>
            <p className="text-gray-600 dark:text-gray-400">{repo.description.substring(0, 100) + " ..."}</p>
          </div>
        ))}
      </div>
      <div className="w-[90%] mx-auto flex justify-between gap-5 mt-5">
        <button
          onClick={handlePrevious}
          className="bg-indigo-500 border border-indigo-500 rounded-md px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 dark:bg-indigo-600 dark:border-indigo-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-indigo-500 border border-indigo-500 rounded-md px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 dark:bg-indigo-600 dark:border-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Popular;
