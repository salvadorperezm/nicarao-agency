const squareButton = document.querySelector("#squareButton");
const trianglePerimeterButton = document.querySelector("#trianglePerimeterButton");
const triangleAreaButton = document.querySelector("#triangleAreaButton");
const circleButton = document.querySelector("#circleButton");
const PI = Math.PI;

squareButton.addEventListener("click", function() {
    let squareInput = document.querySelector("#squareInput").value;
    squareCalculations(squareInput);
}); 

trianglePerimeterButton.addEventListener("click", function() {
    let triangleSideOne = document.querySelector("#triangleSideOne").value;
    let triangleSideTwo = document.querySelector("#triangleSideTwo").value;
    let triangleSideThree= document.querySelector("#triangleSideThree").value;
    trianglePerimeterCalculation(triangleSideOne, triangleSideTwo, triangleSideThree);
});

triangleAreaButton.addEventListener("click", function() {
    let triangleBase = document.querySelector("#triangleBase").value;
    let triangleHeight = document.querySelector("#triangleHeight").value;
    triangleAreaCalculation(triangleBase, triangleHeight);
});

circleButton.addEventListener("click", function() {
    let circleRadius = document.querySelector("#circleRadius").value;
    circleCalculations(circleRadius);
});

function squareCalculations(sideLength) {
    if (sideLength === "") {
        alert("Por favor, ingrese un numero valido");
    } else {
        let squarePerimeter = Number(sideLength) * 4;
        let squareArea = Number(sideLength) * Number(sideLength);
        const squarePerimeterText = document.querySelector(".squarePerimeterText");
        const squareAreaText = document.querySelector(".squareAreaText");
        squarePerimeterText.textContent = `El perimetro de tu cuadrado es: ${squarePerimeter} cm.`;
        squareAreaText.textContent = `El area de tu cuadrado es: ${squareArea} cm^2.`;
    }
}

function trianglePerimeterCalculation(triangleSideOne, triangleSideTwo, triangleSideThree) {
    if (triangleSideOne === "" || triangleSideTwo === "" || triangleSideThree === "") {
        alert("Por favor, verifica tus numeros");
    } else {
        let trianglePerimeter = Number(triangleSideOne) + Number(triangleSideTwo) + Number(triangleSideThree);
        const trianglePerimeterText = document.querySelector(".trianglePerimeterText");
        trianglePerimeterText.textContent = `El perimetro de tu triangulo es: ${trianglePerimeter} cm`;
    }
}

function triangleAreaCalculation(triangleBase, triangleHeight) {
    if (triangleBase === "" || triangleHeight === "") {
        alert("Por favor, verifica tus numeros");
    } else {
        let triangleArea = (triangleBase * triangleHeight) / 2;
        const triangleAreaText = document.querySelector(".triangleAreaText");
        triangleAreaText.textContent = `El area de tu triangulo es: ${triangleArea} cm^2`;
    }
}

function circleCalculations(circleRadius) {
    if (circleRadius === "") {
        alert("Por favor, verifica tus numeros");
    } else {
        let circlePerimeter = 2 * PI * circleRadius;
        let circleArea = PI * (circleRadius * circleRadius);
        const circlePerimeterText = document.querySelector(".circlePerimeterText");
        const circleAreaText = document.querySelector(".circleAreaText");
        circlePerimeterText.textContent = `El perimetro de tu circulo es: ${circlePerimeter} cm`;
        circleAreaText.textContent = `El area de tu circulo es: ${circleArea}  cm^2`;

    }
}