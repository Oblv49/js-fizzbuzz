
for (let i = 1; i <= 100; i++) {

    let color = "bg_blueForCard";
    let textMultiples = (i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" : (i % 3 == 0) ? "Fizz" : (i % 5 == 0) ? "Buzz" : i;
   
    if (i % 3 == 0 && i % 5 == 0) {
        color = "bg_red";  
    } else if ( i % 5 == 0) {
        color = "bg_yellow";
    } else if (i % 3 == 0) {
        color = "bg_green";
    }

    document.getElementById("cardContainer").innerHTML += `
        <div class="square ${color}">
            <p class="text-center fs-5 fw-3 vertical-align-square shadow">${textMultiples}</p>
        </div>
    `;

}