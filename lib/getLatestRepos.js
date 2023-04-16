import axios from "axios";

const getLatestRepos = async (data, token) => {
	// console.log("data", data);
	try {
		const username = data.githubUsername;

		if(token) {
			const res = await axios.get(
				`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
				{
					headers: {
						Authorization: `token ${token}`
					},
				}
			);
			let repos = res.data.items;
			let latestSixRepos = repos.splice(0, 6);
			return latestSixRepos;
		} else {
			const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      );
			let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
		}


	} catch (error){
		console.log(error)
	}
}

export default getLatestRepos;