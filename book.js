var book = document.querySelectorAll(".gridLayout img");
var jumboImage = document.querySelector(".jumbotron img");
var back = document.querySelector(".jumbotron img")

for(var i = 0; i < book.length;i++) {
    book[i].addEventListener("click", function(){
        jumboImage.src = this.src;
    });
}
