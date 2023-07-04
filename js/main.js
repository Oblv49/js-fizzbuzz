
for (let i = 1; i <= 100; i++) {

    let color = "bg_blueForCard";
   
    if (i % 3 == 0 && i % 5 == 0) {
        color = "bg_red";  
    } else if ( i % 5 == 0) {
        color = "bg_yellow";
    } else if (i % 3 == 0) {
        color = "bg_green";
    }

    document.getElementById("cardContainer").innerHTML += `
        <div class="square ${color}">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${i}</p>
        </div>
    `;

}