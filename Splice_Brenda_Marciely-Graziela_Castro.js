const inscricoes = []
const form = document.getElementById("form")
const lista = document.getElementById("lista")

form.addEventListener("submit", function(e){
  e.preventDefault()
  const nome = document.getElementById("nome").value.trim()
  const email = document.getElementById("email").value.trim()
  if(!nome || !email) return
  if(lista.querySelector(".empty")) lista.querySelector(".empty").remove()
  inscricoes.push({nome,email})
  renderizar()
  form.reset()
})

function removerInscricao(index){
  const itens = Array.from(lista.children)
  const li = itens[index]
  if(!li) return
  li.style.transition = "opacity 0.35s, transform 0.35s"
  li.style.opacity = "0"
  li.style.transform = "scale(0.96)"
  setTimeout(() => {
    inscricoes.splice(index,1)
    renderizar()
  }, 340)
}

function renderizar(){
  lista.innerHTML = ""
  if(inscricoes.length === 0){
    const li = document.createElement("li")
    li.className = "empty"
    li.textContent = "Nenhuma inscrição ainda. Adicione a primeira!"
    lista.appendChild(li)
    return
  }
  inscricoes.forEach((item,index) => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = item.nome + " — " + item.email
    const btn = document.createElement("button")
    btn.className = "remove-btn"
    btn.textContent = "Remover"
    btn.addEventListener("click", ()=> removerInscricao(index))
    li.appendChild(span)
    li.appendChild(btn)
    lista.appendChild(li)
  })
}
