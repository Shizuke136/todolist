function selectPeriod() {
    const itens = document.querySelectorAll(".item")
    for (let i = 0; i < itens.length; i++) {
        itens[i].addEventListener("click", () => {
            const selected = document.querySelector(".selected")
            if (selected != null) {
                selected.classList.remove("selected")
            }
            itens[i].classList.add("selected")
        })
    }
}

function getDate() {
    const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
    const days = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]

    const now = new Date()

    const day = now.getDate()
    const month = months[now.getMonth()]
    const year = now.getFullYear()
    const weekDay = days[now.getDay()]

    return ({
        weekDay:weekDay,
        day: day,
        month: month,
        year: year
    })
}

function renderDate() {
    const today = getDate()
    
    const weekDay = document.querySelector("h1")
    weekDay.innerHTML += today.weekDay

    const completeDate = document.querySelector("p")
    completeDate.innerHTML += `${today.month} ${today.day}, ${today.year}`
}

function markCheckbox(){
    const checkbox = document.querySelectorAll(".checkbox")
    for(let i = 0; i < checkbox.length; i++){
        checkbox[i].addEventListener("click",()=>{
            checkbox[i].classList.toggle("marked")
        })
    }
}

function addNewTask(){
    const tasks = document.querySelector(".ul")
    const newTask = document.querySelector("input").value

    tasks.addEventListener("click", () => {
        tasks.innerHTML += `<li><ion-icon name="checkbox-sharp" class="checkbox marked"></ion-icon><span class="task">Terminar esse projeto pessoal</span></li>`

    })
}

selectPeriod();
renderDate();
markCheckbox();