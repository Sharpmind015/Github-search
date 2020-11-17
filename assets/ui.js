class UI {
  constructor( ) {
    this.profile = document.getElementById('profile');
  }
  //Show github profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class = "row">
          <div class = "col-md-3">
            <img class = "img-fluid mb-2" src = "${user.avatar_url}">
            <a href=${user.html_url} target="_blank" class = "btn btn-primary btn-block">View profile</a>
          </div>
          <div class = "col-md-9">
            <span class = "badge badge-primary">
            Public Repos: ${user.public_repos}
            </span>
            <span class = "badge badge-secondary">
            Public Gists: ${user.public_gists}
            </span> 
            <span class = "badge badge-success">
            Followers: ${user.followers}
            </span> 
            <span class = "badge badge-primary">
            Following: ${user.following}
            </span>
            <br>
            <ul class = "list-group mt-3">
              <li class = "list-group-item">Company: ${user.company}</li>
              <li class = "list-group-item">Website/Blog: ${user.blog}</li>
              <li class = "list-group-item">Location: ${user.location}</li>
              <li class = "list-group-item">Member Since: ${user.created_at}</li>
            </ul>  
          </div>
        </div>
      </div>
      <h3 class = "page-heading mb-3">Latest Repos</h3>
      <div id = repos></div>
    `
  }
  //Show github repos
  showRepos(repos) {
    let output = [];
    repos.forEach(function(repo) {
      output += `
        <div class =  'card card-body mb-3'>
        <div class = 'row'>
          <div class = 'col-md-6'>
            <a href = ${repo.html_url} target  = "_blank">${repo.name}</a>
          </div>
          <div class = 'col-md-6'>        
            <span class = "badge badge-primary">
            Public Repos: ${repo.stargazers_count}
            </span>
            <span class = "badge badge-secondary">
            Public Gists: ${repo.watchers_count}
            </span> 
            <span class = "badge badge-success">
            Followers: ${repo.forks_count}
            </span> 
          </div>
        </div>
        </div>
      `;
    });
    //Output Repos
    document.getElementById('repos').innerHTML = output;
  }
  //Show alert
  showAlert(message, className) {
  this.clearAlert();
   let div = document.createElement('div');
    div.className = className;
    div.textContent = message;
    const search = document.querySelector('.search'),
          container = document.querySelector('.searchContainer');
    container.insertBefore(div, search);
    //Timeout after 3 sec
    setTimeout(function(){
      this.clearAlert();
    }, 1000);
  }
  //Clear sprofile
  clearProfile() {
    this.profile.innerHTML = '';
  }
  //Remove alert
  clearAlert() {
    const alert = document.querySelector('.alert');
    if(alert) {
      alert.remove();
    }
  }
}