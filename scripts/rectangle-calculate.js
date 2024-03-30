function rectangleAreaCalculate (){
    // get length of the rectangle
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthvalue =rectangleWidthInput.value;
    const Width = parseFloat(rectangleWidthvalue);
     console.log(rectangleWidthvalue)
//  get width of the rectangle 
const rectangleLengthInput = document.getElementById('rectangle-length');
const rectangleLengthValue = rectangleLengthInput.value;
const length = parseFloat(rectangleLengthValue);
console.log(rectangleLengthValue);
// calculate the area
const rectangleArea = Width * length;
console.log(rectangleArea);
// display the area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = rectangleArea;
}