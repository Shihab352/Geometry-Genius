function parallelogramAreaCalculate (){
    // get the base value of the parallelogram
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseValue = parallelogramBaseInput.value ;
    const base =parseFloat (parallelogramBaseValue);
    console.log(base);
    // get the height value of parallelogram

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightValue = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightValue);
    console.log(height)

    // calculate the parallelogram
    const calculetTheArea = base * height;
    console.log(calculetTheArea);

    // display the value 
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = calculetTheArea;
}