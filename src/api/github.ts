import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchGitHubRepos = async (username: string) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/${username}/repos`, {
            params: {
                sort: 'updated',
                per_page: 100,
                type: 'owner'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};