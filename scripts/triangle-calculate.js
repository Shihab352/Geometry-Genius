/**
 * objective : get base, height of triangle.calculate the area by using the provide formula and then display the area.
 * step 1 : get base value of the triangle.
 * step 2 : added an id in the base input field.
 * step 3 : use getElementById to access the input field.
 * step 4 : get value from the input field.(value is string now)
 * step 5 : convert the value to a number. use parseFolat.
 * */ 




function triangleCalculateArea(){
  // get triangle base value
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseValue = triangleBaseInput.value;
  const base =parseFloat (triangleBaseValue);
  console.log(base);

  // get triangle height value
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightValue = triangleHeightInput.value;
  const height = parseFloat(triangleHeightValue);
  console.log(height);
  // calculate the area
  const triangleArea = 0.5 * base * height;
  console.log('Area of triange is ', triangleArea);

  // display the area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = triangleArea;
}