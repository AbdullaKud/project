let traffic_light_color = prompt("choose red, yellow or green")

if(traffic_light_color === "red"){
    console.error('STOP MANN!!!!')
}else if(traffic_light_color === "yellow"){
    console.warn("WAIT MANN")
}else if(traffic_light_color === "green"){
    console.log("YOU CAN GOO")
}else{
    console.error("THERE IS NO COLOR LIKE THAT")
}



let planets = Number(prompt("CHOOSE PLANET 1-9"));

switch (planets) {
    case 1:
        console.log("YOURR PLANET IS МЕРКУРИЙ")
    break;
    case 2:
        console.log("YOURR PLANET IS ВЕНЕРА")
    break;
    case 3:
        console.log("YOURR PLANET IS ЗЕМЛЯ")
    break;
    case 4:
        console.log("YOURR PLANET IS МАРС")
    break;
    case 5:
        console.log("YOURR PLANET IS ЮПИТЕР")
    break;
    case 6:
        console.log("YOURR PLANET IS САТУРН")
    break;
    case 7:
        console.log("YOURR PLANET IS УРАН")
    break;
    case 8:
        console.log("YOURR PLANET IS НЕПТУЕ")
    break;
    case 9:
        console.log("YOURR PLANET IS ПЛУТОН ")
        console.warn("not planet anymore")
    break;
    default:
        console.error("THERE IS NO PLANETT LIKE THATTT")
}