const List = function(){
let arrList = [];

this.init = function(){
    let mainElement = document.querySelector(`.list__do`)
    if(!mainElement) return;

    mainElement.innerHTML = `
    <div class="list__header">
        <div class="name">
            <h2>ListToDo</h2>
        </div>
        <input type="text" id="list" placeholder="Введите заметку" name="list">
        <button class="addTask">Добавить заметку</button>
        <button class="delete">Очистить список</button>
    </div>
    <div class="content">
    </div>`

let addListBtn = document.querySelector(`.addTask`),
    inputRow = document.querySelector(`#list`)

addListBtn.addEventListener(`click`, () => {
    if(inputRow.value.trim() == ``) return
    

    this.addList(inputRow.value)

    inputRow.value = ``;
})

this.show()

}

this.addList = function(task){
    arrList.push({task});
    this.show()
    console.log(arrList)
};

this.delete = function(){

    arrList = arrList.filter((element) => element = ``);

    this.show()
};



this.delete = function(id){

    let idNumber =+id
    
        arrList = arrList.filter((_, index) => index != idNumber);
        this.show()
    };


this.show = function(){
 
let content = document.querySelector(`.content`),
    p = ``;

arrList.forEach((element, index) => {
    p += `<input type="checkbox"> <span >${element.task}</span> 
    <button class="delete__all" id="${index}">Удалить</button>
    <button class="change" id="${index}">Редактировать</button> <br>`
})

content.innerHTML = p ? `${p}` : `<h2>Список задач пуст</h2>`

let deleteAll = document.querySelectorAll(`.delete__all`)

deleteAll.forEach((deleteABtn) => {
    deleteABtn.addEventListener(`click`, (event) => {
        this.delete(event.target.id)
    })

}) 

let deleteBtn = document.querySelector(`.delete`)

deleteBtn.addEventListener(`click`, (event) => {

    this.delete(event.target)

})



return arrList

};
};

window.addEventListener(`load`, function(){
    const list = new List();
    list.init() 
})