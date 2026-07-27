const myProfile = {
  firstName: "Umar",
  age: 27,
  religion: "Islam",
  employed: true,
  maritalStatus: "married",
}

const myCar = {
  car: "Bmw",
   carBody: "sedan",
  age: 20,
  drive: "awd",
  color: "black",
}
myCar.owner = myProfile;

function maxSpeed (carObj) {
  if (! ("maxSpeed" in carObj)) {
    carObj.maxSpeed = 250;
  }
}
maxSpeed (myCar);

function property (anyObject,propertyName) {
  console.log (anyObject[propertyName])
}
property (myCar,"color");

const products = ["аpple", "pear","banana","orange" ]

const books = [
  {title: "Harry Potter",author: "J.K.Rowling.", year: 1997, coverColor: "blue", genre: "Фэнтези"},
    { title: "Пиковая Дама", author: "С.А.Пушкин", year: 1834, coverColor: "red", genre: "Драма" },
    { title: "Война и Мир", author: "Л.Н.Толстой", year: 1805, coverColor: "red", genre: "Роман" },
]
books.push ({title: "Marvel Spider Man",author: "Stenli", year:1999, coverColor:"red", genre: "Фэнтези"})

const marvelBooks = [
  {title: "Marvel Venom",author: "Stenli.", year: 1994, coverColor: "black", genre: "Фэнтези"},
   {title: "Marvel Iron Man",author: "Stenli.", year: 1998, coverColor: "red", genre: "Фэнтези"},
]
const allBooks = [...books,...marvelBooks];

function checkRarity (allBooksArray) {
  return allBooksArray .map (book =>  {
    if (book.year > 2000) {
      book.isRare = true;
    }
    else {
      book.isRare = false;}
    return book;
  });
}