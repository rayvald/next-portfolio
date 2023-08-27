import React, { useState } from "react";
import userData from "react";


export default function ProjectsByLanguage({repositories}) {
	const [repos, setRespos] = useState(repositories)
  return (
    <div className="max-w-6xl mx-auto">
      {Object.keys(repos).map(language => (
        <div key={language} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{language}</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {repos[language].map((repo, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <p className="text-gray-600 text-lg font-semibold">{repo.name}</p>
								<a className="text-gray-600" href={`${repo.html_url}`}>Github Repo</a>
                {/* <p className="text-gray-600">{repo.html_url}</p> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}