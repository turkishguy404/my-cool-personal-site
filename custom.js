async function getGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`Kullanıcı bulunamadı: ${response.status}`);
    }
    
    const user = await response.json();
    console.log("Kullanıcı Adı:", user.login);
    console.log("Profil Resmi:", user.avatar_url);
    console.log("Repo Sayısı:", user.public_repos);
    document.getElementById("demo").innerHTML = user.login;
    document.getElementById("demo1").innerHTML = avatar_url;
    document.getElementById("demo2").innerHTML = user.public_repos;
  } catch (error) {
    console.error("Hata:", error.message);
  }
}

getGitHubUser("turkishguy404");