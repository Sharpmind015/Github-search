//Instantiate object
const github = new GitHub;
const ui = new UI;
//Search Input
const search = document.getElementById('searchUser');

// Search input EventListener
search.addEventListener('keyup', (e) => {
  // Get inputs from keys up
  const userText = e.target.value;
  //Test  if input is empty
  if(userText !== "") {
    // Fetches user data
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === "Not Found") {
        //Show error alert
        ui.showAlert('User not found', 'alert alert-danger');
      }
      else {
        //Show results
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }
  else {
    // clear display
    ui.clearProfile();
  }
})