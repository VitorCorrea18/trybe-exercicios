let ang1 = 0;
let ang2 = 60;
let ang3 = 90;

let soma = ang1+ang2+ang3

let valid = ang1 > 0 && ang2 > 0 && ang3 >0

if (valid === true) {
    if (soma ===180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("angulo inválido")
}