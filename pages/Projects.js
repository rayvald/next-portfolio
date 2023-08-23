import React from "react";
import getReposByLanguage from "../lib/getReposByLanguage"
import userData from "../constants/data";

export default function projects({ repositories }) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* Single card */}

        </div>
      </div>
    </section>

  );
}

export const getServerSideProps = async () => {
	let token = process.env.GITHUB_AUTH_TOKEN
	const repositories = await getReposByLanguage(userData, token);
  console.log("REPOSITORIES", repositories);

  return {
    props: {
			repositories: repositories || null,
    },
  };
}