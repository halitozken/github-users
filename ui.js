class UI {

    constructor() {
        this.profile = document.getElementById("profile");
        this.cardBody = document.querySelector(".card-body");
        this.repos = document.getElementById("repos")
        this.lastUsers = document.getElementById("last-users");
    }

    showUserData(user) {

        this.profile.innerHTML = `
        
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
     
        `


    }


    showRepoData(repo) {

        this.repos.innerHTML = ""; // daha önceki repoları başta temizlee


        repo.forEach(repos => {

            this.repos.innerHTML += `
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${repos.html_url}" target = "_blank" id = "repoName">${repos.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repos.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repos.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>`

        }
        );
    }







    showUserNotFound() {

        const div = document.createElement("div");

        div.className = `alert alert-danger`;
        div.textContent = "Kullanıcı Bulunamadı!";

        this.cardBody.appendChild(div);

        setTimeout(() => {

            div.remove();



        }, 3000);



    }


    addSearchedUserToUI(username) {

        let users = Storage.getSearchedUsersFromStorage(username);
        

        if (users.indexOf(username) === -1) {

            // li class="list-group-item">asdaskdjkasjkşdjşasjd</li>

            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;

            this.lastUsers.appendChild(li); 
        }

    }
    
    clearAllSearchedFromUI(){

        while(this.lastUsers.firstElementChild !== null){

            this.lastUsers.removeChild(this.lastUsers.firstElementChild);


        }



    }

}