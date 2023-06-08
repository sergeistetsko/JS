// Виды циклов в зависимости от применения

// While - выполняется много раз, в круглых скобках - условие, в фигурных - действие, которое выполняется много раз

let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

// Do While - сначало выполнение тела, хотябы 1 раз, а затем выполнение условия

let count2 = 5;
do {
    console.log(count);
    count--;
} while (count2 > 7);

// For - позволяет делать определённое количество действий

for (let i = 0; i < 10; i++) {
    console.log(i);
};

// Циклы применяются для работы с массивами и объектами

let arr = [5,7,9,1,0];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]*2);
};

// Цикл для работы с массивами

for (let item of arr) {
    console,log(item*2);
};

// Цикл for in для работы с объектами

let obj = {
    "name": "Sergei",
    "age": 29,
    "number": 8899393
}

for(let key in obj) {
    console.log(`Ключ ${key}, Значение ${obj[key]}`)
}

// Возможности работы с массивами

// Метод .forEach - выводит элемент, индекс, массив на каждой итерации // можно обходить массив и делать что-то с его элементами 

let arrr = [1,2,3,4,5,6,7,8,9,10]

arrr.forEach(function(item, i, array) {
    console.log(`${item} ${i} ${array}`)
})

// Метод .find - метод позволяет найти элемент внутри объекта

let people = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Masha"},
    {id: 3, name: "Alex"},
    {id: 4, name: "Kate"},
];

let a = people.find(function(item) {
    if(item.id == 3) return item;
})
console.log(a);

// Если сделать метод .findIndex, то вернётся индекс элемента из массива

// Если сделать метод .filter, то вернётся массив, подходящий под условие

// Если сделать метод .map, то вернётся изменённый массив в новом массиве

// Задачи о циклах и условиях

let massiv = [];
for(let i=0; i<20; i+=2) {
    arr.push(i);
};
console.log(massiv);

//

let massiv2 = [];
for(let i=30; i>0; i-=3) {
    arr.push(i);
};
console.log(massiv2);

//

let massiv3 = [];
for(let i=30; i>0; i--) {
    arr.push(i%3==0);
};
console.log(massiv3);

//

let massiv4 = [];
for(let i=0; i<10; i++) {
    arr.push(Math.pow(i,2));
};
console.log(massiv4);

//

let massiv5 = [1,2,3,4,5,6,7,8,9,10];
let count1 = 0;
for (let i=0; i<massiv5.length; i++) {
    if(massiv1[i]%2==0) {
    count++;
    }
}
console.log("Всего чётных элементов: " + count1)