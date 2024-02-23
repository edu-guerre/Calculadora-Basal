let form = document.getElementById('calculadora');
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const SC1 = document.getElementById('sc1');
const SC2 = document.getElementById('sc2');
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO <=30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = Math.round(flujo*1.5);
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    if (DATO > 30){
        ERROR.style.display = 'none';
        let flujo2 = calcFlujo2(DATO);
        let resultado1 = Math.round(flujo2*1500);
        let resultado2 = Math.round(flujo2*2000);
        SC1.innerHTML = resultado1 + ' CC 1';
        SC2.innerHTML = resultado2 + ' CC 2';
        SC1.style.display = 'block';
        SC2.style.display = 'block';
    }else{
        SC1.style.display = 'none';
        SC2.style.display = 'none';
    }
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20 && resto<=30){
        let aux = resto-20;
        flujo += aux*20;
        resto -= aux;
    } 
    if (resto>10 && resto<=20){
        let aux = resto-10;
        flujo += aux*50;
        resto -= aux;
    }
    if(resto>0 && resto<=10){
        flujo += resto*100;
    }
    return Math.round(flujo/24);
}
function calcFlujo2(peso){
    let resto = peso;
    let result = 0;
    result = ((resto*4)+7)/((resto*1)+90);
    return result;
}