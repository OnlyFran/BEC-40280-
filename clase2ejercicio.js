const books = [{bookName: 'The Walking Dead', author: 'Robert Kirkman'}, {bookName: 'Harry Potter', author: 'J. K. Rowling'}];
let pets = ['Tom', 'Jerry'];

class User {
    constructor(name, lastname, books, pets) {
        this.name = name;
        this.lastname = lastname;
        this.books = books;
        this.pets = pets;
    }


    getFullName() {
        return (`${user1.name} ${user1.lastname}`);
    }

    addPets(pets) {
        const newPet = 'Spike';
        pets.push(newPet);
    }

    countPets() {
        return pets.length;
    }

    addBooks() {
        const newBook = 'Alicie In Wonderland';
        books.push(newBook);
    }

    getBooksNames() {
        return user1.books;
    }


}

const user1 = new User('Timmy', 'Anderson', `${books[0].bookName}, ${books[1].bookName}`, `${pets[0]} y ${pets[1]}`);

/* 
console.log(user1.getFullName());

console.log(user1.countPets());
 */

console.log(user1.getBooksNames());