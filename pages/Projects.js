import React from "react";
import getReposByLanguage from "../lib/getReposByLanguage"
import userData from "../constants/data";
import ContainerBlock from "../components/ContainerBlock";
import ProjectsByLanguage from "../components/ProjectsByLanguage";

export default function projects({ repositories }) {
  return (
		<ContainerBlock>		
			<ProjectsByLanguage repositories={repositories}/>
		</ContainerBlock>
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