var pessoas = [];

function salvar(event){
    event.preventDefault();
    let id = document.getElementById('id');
    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let destino = document.getElementById('destino');
    
    if (id.value > 0 && id.value < 11) {
        pessoa = {"ID": id.value, "Nome": nome.value, "Sobrenome": sobrenome.value, "Destino": destino.value};
        pessoas.push(pessoa);
        console.log("Cadastrando...", id.value, nome.value, sobrenome.value, destino.value);
    }else{
        alert("Informe um número de id entre 1 e 10")
    }
}