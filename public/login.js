function login() {
    const nameEl = document.querySelector("#name"); //pull from id 'name'
    localStorage.setItem("userName", nameEl.value); //place item in local storage
    window.location.href = "play.html"; //nav to play.html
}