//Alertas
//alert("Hola soy del ADSO"); // Esta línea está desactivada por las barras "//" al inicio; si estuviera activa mostraría una ventana emergente (alert) con el texto indicado

//Variables var, const y let
let nombre = "Ficha ADSO" // "let" declara una variable que puede cambiar de valor más adelante; aquí crea la variable "nombre" con el texto "Ficha ADSO"
nombre = "ADSO mañana" // Reasigna un nuevo valor a la variable "nombre" que ya existía; no lleva "let" porque no se está declarando de nuevo
let altura = 170; // Declara una nueva variable llamada "altura" que guarda un valor numérico, 170

//Constantes

const apellido = "Garcia" // "const" declara una variable cuyo valor no se puede reasignar después; aquí guarda el texto "Garcia"


//Mostrar consola
console.log(nombre) // console.log muestra en la consola del navegador el valor de lo que se le pase, aquí el valor de la variable "nombre"; sirve para revisar datos mientras se programa
console.log(altura)

//Concatenaciòn
let concatenaciòn = nombre + "" + apellido // Declara una variable que une (concatena) el texto de "nombre" y "apellido" usando el operador +, con un texto vacío "" en medio

//Seleccionar elementos del DOM 
let datos = document.querySelector("#datos") // document.querySelector busca en el HTML el elemento que coincida con el selector indicado; "#datos" busca el elemento cuyo id es "datos" y guarda una referencia a él en la variable "datos"
datos.innerHTML = ` // innerHTML permite definir el contenido HTML que va dentro de un elemento; aquí se le asigna todo el texto entre comillas invertidas (template string), que permite escribir varias líneas e insertar variables con ${}
<hr> // Texto plano dentro del template string; representa una línea horizontal que se insertará en la página
<h1>Soy la caja de datos</h1> // Este texto se convertirá en un encabezado de nivel 1 dentro del elemento "datos"
<h2>Mi nombre es: ${concatenacion}</h2> // La sintaxis ${...} dentro de un template string inserta el valor de una variable directamente en el texto; aquí intenta usar "concatenacion", aunque la variable fue creada como "concatenaciòn" (con tilde) en la línea anterior
<h3> Mido: ${altura} cm</h3> // Inserta el valor de la variable "altura" dentro del texto usando la misma sintaxis ${}
` // Cierra el template string que se abrió unas líneas más arriba
//Condicionales
altura = 165 // Reasigna un nuevo valor (165) a la variable "altura" que ya existía
if (altura >= 170) { // "if" inicia una estructura condicional; revisa si el valor de "altura" es mayor o igual a 170, y si es verdadero ejecuta el código que está entre las llaves siguientes
    datos.innerHTML += `<h1>Eres una persona alta</h1>` // El operador += agrega contenido nuevo a lo que ya tiene "datos" en vez de reemplazarlo; aquí agrega el texto "Eres una persona alta"
}else{ // "else" define el bloque de código que se ejecuta cuando la condición del "if" anterior es falsa
    datos.innerHTML += `<h1>No eres una persona alta</h1>`
} // Cierra la estructura condicional if/else

//Bucles
for(let year = 2000; year <= 2023; year++){ // "for" crea un bucle: empieza con year en 2000, se repite mientras year sea menor o igual a 2023, y aumenta year en 1 (year++) después de cada repetición
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`
} // Cierra el bucle "for"; a diferencia de la llave de la línea anterior, esta llave termina un bucle y no una condición

//Arrays
let nombres = ["Carlos", "Pedro", "Ana"] // Declara una variable que guarda un array (una lista ordenada de valores), aquí tres nombres de personas en formato de texto
let divNombres = document.querySelector("#nombres")
//divNombres.innerHTML = nombres[1] // Línea desactivada; si estuviera activa mostraría solo el segundo nombre del array, ya que en los arrays se cuenta desde la posición 0, así que la posición 1 es "Pedro"
divNombres.innerHTML = `<h1>Listado de nombres</h1><ul>` // Aquí se agrega, además del encabezado, la etiqueta <ul> como texto, que en HTML representa el inicio de una lista sin numerar

/* nombres.forEach(nombre =>{
divNombres.innerHTML += `<li>${nombre}</li>`
}) */ // Este bloque completo está desactivado porque está escrito entre /* y */; es una forma alternativa de recorrer el array usando forEach, pero no se ejecuta

for (let nombre of nombres){ // "for...of" es otro tipo de bucle que recorre uno por uno los elementos del array "nombres", guardando cada valor de forma temporal en la variable "nombre"
divNombres.innerHTML += `<li>${nombre}</li>` // Agrega un nuevo elemento de lista (<li>) dentro de divNombres por cada nombre que va pasando el bucle
}
divNombres.innerHTML += `</ul>` // Agrega el texto que cierra la lista, la etiqueta </ul>

//Funciones
const miInformacion = (nombre, altura) => { // Declara una constante que guarda una función flecha (arrow function), una forma corta de escribir funciones en JavaScript; esta recibe dos parámetros, "nombre" y "altura"
    let misDatos = `<hr> // Declara una variable local dentro de la función que guarda un template string con texto en formato HTML
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${concatenacion}</h2>
<h3> Mido: ${altura} cm</h3>
`
return misDatos // "return" hace que la función entregue como resultado el valor guardado en "misDatos"
}
//console.log(miInformacion("Jose Paz", 187)) // Línea desactivada; si estuviera activa mostraría en consola el resultado de llamar la función miInformacion con esos valores

const imprimir = () => { // Declara otra función flecha llamada "imprimir" que no recibe ningún parámetro
    let datos = document.querySelector("#datos")
    datos.innerHTML = miInformacion("Jose Paz", 187) // Llama a la función miInformacion con los valores "Jose Paz" y 187, y asigna el texto que devuelve como nuevo contenido de "datos"
}
imprimir() // Llama (ejecuta) la función imprimir definida arriba; esta es la línea que realmente pone en marcha todo el proceso cuando corre el script
