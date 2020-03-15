int width = prompt("Please input a width");
int height = prompt("Please unput a height");
let area = getArea(height, width);
console.log(area);

console.log(width);

function getArea(length, width){
    return length * width;
}

function getPerimeter(length, width){
    return length * 2 + width * 2;
}
