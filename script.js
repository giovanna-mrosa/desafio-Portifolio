const socialMediaLinks = {
  github: 'giovanna-mrosa',
  instagram: 'giovanna.mrosa',
  linkedIn: 'in/giovannamarcarorosa'
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userImage.src = data.avatar_url
      userLocal.textContent = data.location
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
