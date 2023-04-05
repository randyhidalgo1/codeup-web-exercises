export const getGithubUsers = async (username) => { // add username parameter
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`, { // use the passed username parameter
            headers: {
                'Authorization': "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" // use the token from the keys file
            }
        });

        const data = await response.json(); // use await instead of .then to get the data
        console.log(data)
        const lastCommitEvent = data.find(event => event.type === "PushEvent");
        const lastCommitDate = new Date(lastCommitEvent.created_at);

        return lastCommitDate.toDateString();

    } catch (error) {
        console.error(error); // log the error
        throw new Error('Error fetching GitHub data'); // throw a new error
    }
};

export const renderGithubUser = (username, lastCommitDate, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `
    <h2>${username}</h2> <!-- use the passed username parameter -->
    <p>Last commit: ${lastCommitDate}</p> <!-- add last commit date -->
  `;
    parent.appendChild(element);
};