var todos= document.querySelector(".todos")
var paginate = document.querySelector(".pagination")
var next = document.querySelector(".pages")
console.log(todos)



const pagination=(page)=>{
    console.log(page)
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
        var data = res.data
        var perPage = 10
        var totalpages = data.length/perPage
        if(parseInt(page)==totalpages){
            next.style.display = 'none'
        }
        console.log(totalpages)
        next.setAttribute("id",parseInt(page)+1)
        const todos = document.querySelector(".todos")
        for(i=(page-1)*perPage; i<perPage*page; i++){
            var span = document.createElement("span");
            var check = document.createElement("i")
            span.className='todo'
            span.innerHTML = data[i].id+".  "+  data[i].title;
            if(data[i].completed){
                span.classList.add("complete")
            }
            else{
                span.classList.add("incomplete")
            }
            todos.appendChild(span);
        }
    })
    
}
pagination(1)
