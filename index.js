const searchForm = document.getElementById("github-form");
const userNameBox = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

const git = new Github();
const ui = new UI();


eventListeners();

function eventListeners(){

    searchForm.addEventListener("submit",searchUser);
    document.addEventListener("DOMContentLoaded",getAllSearched)
    clearLastUsers.addEventListener("click",clearAllSearched)


}


function searchUser(e){
    
    let username = userNameBox.value.trim()
    
    if(username === ""){
        alert("Lütfen bir kullanıcı adı giriniz")
    }
    else{
        git.getUserData(username)
        .then(response => {

                if(response.user.message === "Not Found"){
                    ui.showUserNotFound();
                }
                else{
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);
                    ui.showUserData(response.user);
                    ui.showRepoData(response.repo);
                } 
            
            }
            )
        .catch(error => console.log(error));   
    }

    
       

   
    e.preventDefault();
}

function clearAllSearched(){

    if(confirm("Emin misiniz?")){

        Storage.clearAllSearchedUsersFromStorage()
        ui.clearAllSearchedFromUI();
    }

}


function getAllSearched(){

    let users = Storage.getSearchedUsersFromStorage();

    let result = "";

    users.forEach(user => {
        
    result += `<li class="list-group-item">${user}</li>`

    });

    lastUsers.innerHTML = result;

}






