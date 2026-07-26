async function getGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`Kullanıcı bulunamadı: ${response.status}`);
    }
    
    const user = await response.json();
    console.log("User Name:", user.login);
    console.log("Repo :", user.public_repos);
    document.getElementById("demo").innerHTML = "Name: " + user.login;
    document.getElementById("demo2").innerHTML = "Number of repo's: " + user.public_repos;
  } catch (error) {
    console.error("Hata:", error.message);
  }
}

getGitHubUser("turkishguy404");