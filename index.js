class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

showInTable();
let button = document.getElementById('button');
button.addEventListener('click', function (e) {
    console.log("Heyy");
    e.preventDefault();
    let bookname = document.getElementById("book").value;
    let authorname = document.getElementById("author").value;
    let coding = document.getElementById("coding");
    let science = document.getElementById("science");
    let technology = document.getElementById("technology");
    if (coding.checked == true) {
        type = "coding";
    }
    else if (science.checked == true) {
        type = "science";
    }
    else {
        type = "technology";
    }
    let book = new Book(bookname, authorname, type);
    let data=localStorage.getItem('book');
    let dataarr=[];
    if(data!=null)
    {
        dataarr=JSON.parse(data);
        console.log(dataarr);
        dataarr.push(book);
        localStorage.setItem('book',JSON.stringify(dataarr));
    }
    else{
        let dataarr=[];
        dataarr.push(book);
    localStorage.setItem('book',JSON.stringify(dataarr));
    }
    showInTable();
});
function showInTable() {
    let table = document.getElementById('addinme');
    let data=localStorage.getItem('book');
    let dataarr=[];
    let html="";
    if(data!=null)
    {
        console.log("Hii bro");
        dataarr=JSON.parse(data);
        Array.from(dataarr).forEach((element,index)=>{
            html += `<tr>
        <th scope="row">${index+1}</th>
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
    </tr>`
        })
        table.innerHTML=html;
    }
    
}
