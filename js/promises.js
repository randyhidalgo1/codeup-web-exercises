import { getGithubUsers, renderGithubUser } from "./github.js"; //THE GETTER

(async () => {
    const usernames = ['randyhidalgo1'];
    const usersGrid = document.querySelector('#userGrid');
    for (const username of usernames) {
        const lastCommitDate = await getGithubUsers(username);
        renderGithubUser(username, lastCommitDate, usersGrid);
    }
})();