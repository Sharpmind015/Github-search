class GitHub{
  
  constructor() {
    this.client_id = 'fe771327746b132e6131';
    this.client_secret = 'f039c56606f17ff361819eae57adf3486f2a2afc';
    this.repos__count = 7;
    this.repos__sort = 'created: asc';
  }
  //Requests github API for user details and repo
  async getUser(user) {
    const profileData = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
   
    const repoData = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos__count}&sort=${this.repos__sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileData.json();

    const repos = await repoData.json();
    return {
      profile,
      repos
    }
  }
}