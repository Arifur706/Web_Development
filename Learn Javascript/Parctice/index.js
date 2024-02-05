function myfun(){
    var Name1 = document.getElementById(f1)
    var Name2 = document.getElementById(f2)

    var fullname = Name1 + Name2;
    document.getElementById(p1).innerHTML = fullname;

}


console.clear();


const getData = () =>{

    const xhr = new XMLHttpRequest();


    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');

    xhr.onload = () =>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }

    xhr.send();
}

getData();