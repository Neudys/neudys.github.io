let primeraGoma = document.querySelector(".Div__Div--1");
let segundaGoma = document.querySelector(".Div__Div--2");
let terceraGoma = document.querySelector(".Div__Div--3");
let cuartaGoma = document.querySelector(".Div__Div--4");
let quintaGoma = document.querySelector(".Div__Div--5");
let sextaGoma = document.querySelector(".Div__Div--6");
let septimaGoma = document.querySelector(".Div__Div--7");
let octavaGoma = document.querySelector(".Div__Div--8");
let Mostrar = document.querySelector(".Mostrar");
let cont = document.querySelector(".div__div--1")
let nuevoHTML = "<div class='div__div--js' > <p> Marca: toprunner </p> <p> tipo: combinada </p> </div>";
let boton = " <button class='div__button--js'>Realizar pedido</button> "

Mostrar.addEventListener("click", (e)=>{
    cont.innerHTML = '<div class="Div__Div--1">goma 1</div>'
    cont.innerHTML += '<div class="Div__Div--2">goma 2</div>'
    cont.innerHTML += '<div class="Div__Div--3">goma 3</div>'
    cont.innerHTML += '<div class="Div__Div--4">goma 4</div>'
    cont.innerHTML += '<div class="Div__Div--5">goma 5</div>'
    cont.innerHTML += '<div class="Div__Div--6">goma 6</div>'
    cont.innerHTML += '<div class="Div__Div--7">goma 7</div>'
    cont.innerHTML += '<div class="Div__Div--8">goma 8</div>'
})
primeraGoma.addEventListener("click", (e)=>{
    primeraGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    primeraGoma.innerHTML += nuevoHTML
    primeraGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    primeraGoma.innerHTML += boton
});
segundaGoma.addEventListener("click", (e)=>{
    segundaGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    segundaGoma.innerHTML += nuevoHTML
    segundaGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    segundaGoma.innerHTML += boton
});
terceraGoma.addEventListener("click", (e)=>{
    terceraGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    terceraGoma.innerHTML += nuevoHTML
    terceraGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    terceraGoma.innerHTML += boton
});
cuartaGoma.addEventListener("click", (e)=>{
    cuartaGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    cuartaGoma.innerHTML += nuevoHTML
    cuartaGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    cuartaGoma.innerHTML += boton
});
quintaGoma.addEventListener("click", (e)=>{
    quintaGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    quintaGoma.innerHTML += nuevoHTML
    quintaGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    quintaGoma.innerHTML += boton
});
sextaGoma.addEventListener("click", (e)=>{
    sextaGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    sextaGoma.innerHTML += nuevoHTML
    sextaGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    sextaGoma.innerHTML += boton
});
septimaGoma.addEventListener("click", (e)=>{
    septimaGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    septimaGoma.innerHTML += nuevoHTML
    septimaGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    septimaGoma.innerHTML += boton
});
octavaGoma.addEventListener("click", (e)=>{
    octavaGoma.innerHTML = "<div> <h6 class='div__h6--js'> Neumatico 1 </h6> </div> "
    octavaGoma.innerHTML += nuevoHTML
    octavaGoma.innerHTML += "<div class= 'div__div--js2'> <p>unidades restantes: 6</p> </div>"
    octavaGoma.innerHTML += boton
});



