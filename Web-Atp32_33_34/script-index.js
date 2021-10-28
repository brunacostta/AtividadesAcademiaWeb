function entrar(event){
    event.preventDefault();
    let login = document.getElementById('login');
    let senha = document.getElementById('senha');
    console.log(login.value, senha.value)
    alert("Entrando...");
    window.location.href="create.html";
}
