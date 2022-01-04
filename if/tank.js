
    let tank = document.getElementById("tank");
    let boom = document.getElementById("boom");
    let top_boom = parseInt(boom.style["top"]);
    let left_boom = parseInt(boom.style["left"]);

    function len () {
        let  top_tank = parseInt(tank.style["top"]);
        let  left_tank = parseInt(tank.style["left"]);
        tank.style["top"] = top_tank - 19 + "px";

        top_tank = parseInt(tank.style["top"]);
        left_tank = parseInt(tank.style["left"]);
        if (top_tank == top_boom && left_tank == left_boom) {
            tank.style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')";
            tank.style.zIndex = 1;
        }
    }
    function xuong () {
        let  top_tank = parseInt(document.getElementById("tank").style["top"]);
        let  left_tank = parseInt(document.getElementById("tank").style["left"]);
        tank.style["top"] = top_tank + 19 + "px";

        top_tank = parseInt(tank.style["top"]);
        left_tank = parseInt(tank.style["left"]);
        if (top_tank == top_boom && left_tank == left_boom) {
            document.getElementById("tank").style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')";
            document.getElementById("tank").style.zIndex = 1;
        }
    }
    function trai () {
        let  top_tank = parseInt(document.getElementById("tank").style["top"]);
        let  left_tank = parseInt(document.getElementById("tank").style["left"]);
        tank.style["left"] = left_tank - 19 + "px";

        top_tank = parseInt(tank.style["top"]);
        left_tank = parseInt(tank.style["left"]);
        if (top_tank == top_boom && left_tank == left_boom) {
            document.getElementById("tank").style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')";
            tank.style.zIndex = 1;
        }
    }
    function phai () {
        let  top_tank = parseInt(document.getElementById("tank").style["top"]);
        let  left_tank = parseInt(document.getElementById("tank").style["left"]);
        tank.style["left"] = left_tank + 19 + "px";

        top_tank = parseInt(tank.style["top"]);
        left_tank = parseInt(tank.style["left"]);
        if (top_tank == top_boom && left_tank == left_boom) {
            document.getElementById("tank").style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')";
            tank.style.zIndex = 1;
        }
    }
























