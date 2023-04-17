console.log("script05.js")

const repositorio = new Repo()

dados.forEach((el)=> repositorio.addTodo(new Todo(el) ))
console.log(repositorio.todos)

function cadastrar() {
    let texto = document.getElementById("descricao").value
    let obj = {
        userId: 0,
        id: 0,
        title: texto,
        completed: false
    }
    let todo = new Todo(obj)
    repositorio.addTodo( todo )
}

function trocou(val) {
    const todo = repositorio.getTodo(val)
    const nomeUsuario = buscarNomeUsuario(todo.userId)
    if (todo != undefined) {
        document.getElementById("detalhe").innerHTML = TodoView.toHTML(todo) + `<p>Nome do usuário: ${nomeUsuario}</p>`
    } else {
        document.getElementById("detalhe").innerHTML = "Código não encontrado"
    }
}
//função busca o nome do usuário com base no id, recebe como parâmetro o número do id e retorna o nome do usuário correspondente.
function buscarNomeUsuario(id) { 
    const usuario = dadosUser.find((user) => user.id == id);
    if (usuario) {
      return usuario.name;
    } else {
      return "Usuário não encontrado";
    }
  }