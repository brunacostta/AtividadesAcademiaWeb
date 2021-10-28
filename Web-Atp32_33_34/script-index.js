function entrar(event){
    event.preventDefault();
    let login = document.getElementById('login');
    let senha = document.getElementById('senha');
    console.log("Entrando...", login.value, senha.value);
}
