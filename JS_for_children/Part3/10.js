var dinosaurs = [
    "Тираннозавр 1",
    "Тираннозавр 2",
    "Тираннозавр 3",
    "Тираннозавр 4",
    "Тираннозавр 5",
    "Тираннозавр 6",
    "Тираннозавр 7",
    "Тираннозавр 8",    
];
console.log(dinosaurs.length);
console.log(dinosaurs[dinosaurs.length - 1]);
dinosaurs.push("Тираннозавр 3000");
dinosaurs.unshift("Тираннозавр 0");
dinosaurs.pop();
dinosaurs.shift();
console.log(dinosaurs);