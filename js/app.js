//// MAPS ON JS

//// NOMBRE USUARIO
const boton = document.getElementById('guardarNombre');
const n = document.getElementById('nombre');
let puntos = 0;

guardarNombre.addEventListener('click',()=>{
  const nombreUsuario = n.value;
  document.getElementById('llamar').style.display= 'none';
  document.getElementById('saludo').innerHTML = " Hola " + nombreUsuario + ", ¿Qué quieres practicar? ";
  document.getElementById('botones').style.display='block';
})

//// PREGUNTAS COMUNIDADES
pregComunidades.addEventListener('click',()=>{
  puntos = 0;
  document.body.style.backgroundImage = "url(img/paginapreguntas.png)";
  document.getElementById('mapon').style.display= 'block';
  document.getElementById('inicio').style.display= 'none';
  document.getElementById('madrid').style.display= 'block';
  document.getElementById('resultado_final').style.display= 'none';
})

siguientePregunta1.addEventListener('click',()=>{
  if (document.querySelector('input[nombre="p1"]:checked').value === "100") {
    puntos = puntos + 100;
  }
  document.getElementById('mapon').style.display= 'block';
  document.getElementById('madrid').style.display= 'none';
  document.getElementById('extremadura').style.display='block';
})

siguientePregunta2.addEventListener('click',()=>{
  if (document.querySelector('input[nombre="p2"]:checked').value === "100") {
    puntos = puntos + 100;
  }
  document.getElementById('mapon').style.display= 'block';
  document.getElementById('extremadura').style.display= 'none';
  document.getElementById('cataluña').style.display='block';
})

siguientePregunta3.addEventListener('click',()=>{
  if (document.querySelector('input[nombre="p3"]:checked').value === "100") {
    puntos = puntos + 100;
  }
  document.getElementById('mapon').style.display= 'block';
  document.getElementById('murcia').style.display= 'none';
  document.getElementById('cataluña').style.display='block';
})

//// RESULTADO COMUNIDADES
resultado1.addEventListener('click',()=>{
    if (document.querySelector('input[nombre="p3"]:checked').value === "100") {
    puntos = puntos + 100;
  }
  document.body.style.backgroundImage = "url(img/paginapreguntas.png)";
  document.getElementById('mapon').style.display= 'none';
  document.getElementById('cataluña').style.display= 'none';
  document.getElementById('resultado_final').style.display= 'block';
  document.getElementById('rpta').innerHTML= "Puntuación " + puntos + " /300 puntos";
})

//// PREGUNTAS PROVINCIAS
pregProvincias.addEventListener('click',()=>{
  puntos=0;
   document.body.style.backgroundImage = "url(img/paginapreguntas.png)";
   document.getElementById('mapon').style.display= 'block';
   document.getElementById('pontevedra').style.display= 'block';
   document.getElementById('inicio').style.display= 'none';
   document.getElementById('resultado_final').style.display= 'none';
})

siguientePregunta3.addEventListener('click',()=>{
  if (document.querySelector('input[nombre="p3"]:checked').value === "100") {
    puntos = puntos + 100;
  }
  document.getElementById('mapon').style.display= 'block';
  document.getElementById('pontevedra').style.display= 'none';
  document.getElementById('cadiz').style.display='block';
})

siguientePregunta4.addEventListener('click',()=>{
  if (document.querySelector('input[nombre="p4"]:checked').value === "100") {
    puntos = puntos + 100;
  }
  document.getElementById('mapon').style.display= 'block';
  document.getElementById('cadiz').style.display= 'none';
  document.getElementById('toledo').style.display='block';
})
//// RESULTADO PROVINCIAS
resultado2.addEventListener('click',()=>{
  if (document.querySelector('input[nombre="p5"]:checked').value === "100") {
    puntos = puntos;
  }
  document.body.style.backgroundImage = "url(img/paginapreguntas.png)";
  document.getElementById('mapon').style.display= 'none';
  document.getElementById('inicio').style.display= 'none';
  document.getElementById('toledo').style.display= 'none';
  document.getElementById('resultado_final').style.display= 'block';
  document.getElementById('rpta').innerHTML= "Puntuación " + puntos + " /300 puntos";
  document.getElementById('botones').style.display='block';
  })