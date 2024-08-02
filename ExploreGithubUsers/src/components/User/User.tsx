import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BlinkBlur } from "react-loading-indicators";

interface UserProps {
  username: string;
}

const User = ({ username }: UserProps) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [username],
    queryFn: async () => {
      if (username) {
        const userResponse = await axios.get(
          `https://api.github.com/users/${username}`
        );
        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        return { user: userResponse.data, repos: reposResponse.data };
      }
      return null;
    },
    enabled: !!username,  
  });

  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 flex flex-col items-center">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <BlinkBlur
            color="#39abd1"
            size="medium"
            text="Loading"
            textColor="#39abd1"
          />
        </div>
      ) : isError ? (
        <div className="text-red-500">
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </div>
      ) : (
        data && (
          <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
            {/* User Information Section */}
            <div className="p-6 border-r border-gray-200 dark:border-gray-700 lg:w-1/3 flex flex-col items-center">
              <img
                src={data.user.avatar_url}
                alt={data.user.login}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{data.user.login}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {data.user.bio || "No bio available"}
              </p>
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Followers:</strong> {data.user.followers}
              </p>
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Location:</strong> {data.user.location || "Not specified"}
              </p>
              <p className="text-gray-800 dark:text-gray-200 mb-2">
                <strong>Blog:</strong> {data.user.blog ? (
                  <a href={data.user.blog} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Check Blog ↗
                  </a>
                ) : "Not available"}
              </p>
            </div>

            {/* Repositories Section */}
            <div className="p-6 lg:w-2/3 flex flex-col gap-5 h-[80vh]">
              <h2 className="text-2xl font-semibold mb-4">Repositories</h2>
              <div className="overflow-y-scroll custom-scrollbar">
                {data.repos.length > 0 ? (
                  data.repos.map((repo: any) => (
                    <div key={repo.id} className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md mb-4 p-4">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:bg-gray-100 dark:hover:bg-gray-600 p-4 rounded-lg"
                      >
                        <h3 className="font-medium text-indigo-600 dark:text-indigo-400 text-lg mb-2">{repo.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">{repo.description || "No description available"}</p>
                        <p className="text-gray-500 dark:text-gray-400">Language: {repo.language || "Not specified"}</p>
                      </a>
                    </div>
                  ))
                ) : (
                  <p>No repositories available.</p>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default User;
