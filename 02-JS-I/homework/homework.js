// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "juntos";
// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 14417416;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {

  // "Return" la string provista: str
  return str;
}

function suma(x, y) {
  sum=x+y;
  return sum;
  
}

function resta(x, y) {
  var res=x-y;
  return res;
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  var mul=x*y;
  return mul;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  var div=x/y;
  return div;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  if (x===y) {
    return true;
  }
  return false;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  if (str1.length===str2.length) {
    return true;
  }
  return false;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  if (num<90) {
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  // Devuelve "nptrue" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  if (num>50) {
    return true;
  }
  return false;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  return x%y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  if (num%2===0) {
    return true;
  }
  return false;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  if (num%2!==0) {
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  return Math.pow(num,2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  return Math.pow(num,3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return Math.pow(num,exponent);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random(0,1);
}

function esPositivo(numero) {
  var pos="Es positivo";
  var neg="Es negativo";
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero>0) {
    return pos;
  }
  if (numero<0) {
    return neg;
  }
  return false;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  var simbolo=str+"!";
  return simbolo;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  var comb=nombre+" "+apellido;// Ejemplo: "Soy", "Henry" -> "Soy Henry"
  return comb;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  var concatena="Hola"+" "+nombre+"!";
  return concatena; 
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  area=alto*ancho;
  return area;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  return 4*lado;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  return (base*altura)/2;

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  const tasa=1.20;
  return euro*tasa;
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  var vocal="Es vocal";
  var letras="Dato incorrecto";
  vocales=['a','e','i','o','u'];
  lonj=vocales.length;
  if (letra.length>1) {
    return letras;
  }
  for (var i = vocales.length- 1; i >= 0; i--) {
      if (letra===vocales[i]) {
      return vocal;
    }
}
  return letras;


}
  
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
