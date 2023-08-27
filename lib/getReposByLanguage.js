import axios from "axios"

const getReposByLanguage = async (data, token) => {

	try{
		const username = data.githubUsername
		const languages = ["swift", "javascript", "dart", "python"]
		var languageRepos = {}

		if(token){
			const languageQuery = languages.map(language => `language:${language}`).join('+');

			const res = await axios.get(
				`https://api.github.com/search/repositories?q=user:${username}+${languageQuery}+sort:author-date-asc`,
				{
					headers: {
						Authorization: `token ${token}`
					},
				}
			);
			let repos = res.data.items
			repos.forEach(repo => {
				console.log(repo)
				if(!(repo.language in languageRepos)){
					languageRepos[repo.language] = []
				}

				languageRepos[repo.language].push(repo)
			});
			return languageRepos
		} 
	} catch (error) {
		console.log(error);
	}
}

export default getReposByLanguage;