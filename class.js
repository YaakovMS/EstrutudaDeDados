class Book {
    constructor(title, pages, isbn){
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
    printTitle(){
        console.log(this.title)
    }
}
let book = new Book('Estrutura de dados', 400,'20-20')
console.log(book.title)
book.title ='esturura de dados e algoritmos'
console.log(book.title)