// Usando la funcion dragElement
// para darle propiedad de arrastre
// a las plantas
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

//Creando la funcion dragElement
function dragElement(terrariumElement) {
    let despX = 0, despY = 0, initPosX = 0, initPosY;
    //funcion elementdrag
    function elementDrag(e){
        //Se calcula el desplazamiento
        despX = e.clientX - initPosX;
        despY = e.clientY - initPosY;
        //asiganando nueva posicion inicial
        initPosX = e.clientX;
        initPosY = e.clientY;
        //desplazamiento a las plantas
        terrariumElement.style.left = (terrariumElement.offsetLeft + despX) + 'px';
        terrariumElement.style.top = (terrariumElement.offsetTop + despY) + 'px';
    }
    //funcion stopelementdrag
    function stopeElementDrag(){
        document.onpointermove = null;
        document.onpointerup = null;
    }
    //pointerdrag function
    function pointerDrag(event){
        //previene el funcionamiento por defecto
        event.preventDefault();
        initPosX = event.clientX;
        initPosY = event.clientY;
        //console.log(`initposX ${initPosX}`);
        //console.log(`initposY ${initPosY}`);
    //realizando funcion de arrastre
    document.onpointermove = elementDrag;
    //cuando el usuario suelta el boton
    document.onpointerup = stopeElementDrag;
    }
    //detectando el evento de onpointerdown
    terrariumElement.onpointerdown = pointerDrag;
}

