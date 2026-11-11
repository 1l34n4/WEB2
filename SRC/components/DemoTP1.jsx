import { useEffect } from 'react';

function DemoTP1() {
  useEffect(() => {
    const a = 10;
    const b = 3;
    console.log('Suma:', a + b, 'Resta:', a - b, 'Mult:', a * b, 'Div:', a / b);

    const n1 = 8;
    const n2 = 8;
    if (n1 > n2) console.log(n1, 'es mayor que', n2);
    else if (n2 > n1) console.log(n2, 'es mayor que', n1);
    else console.log('Son iguales');

    const miVariable = 'Mira Hacia Aquí!!';
    console.log('Mayúscula:', miVariable.toUpperCase());
    console.log('Minúscula:', miVariable.toLowerCase());
    console.log('Carácter posición 4:', miVariable.charAt(4));

    const num = 14.4;
    console.log('Redondeo arriba:', Math.ceil(num));
    console.log('Raíz cuadrada:', Math.sqrt(num));
    console.log('Aleatorio entero:', Math.floor(Math.random() * 100) + 1);

    const hoy = new Date();
    console.log(`Fecha: ${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`);

    const numeros = [1, 2, 3, 4, 5];
    const dobles = numeros.map((n) => n * 2);
    console.log('Original:', numeros);
    console.log('Dobles:', dobles);

    const variable8 = 'asignarle_valor_cadena';
    const transformada = variable8 === variable8.toUpperCase() ? variable8.toLowerCase() : variable8.toUpperCase();
    console.log('Ejercicio 8:', transformada);

    const esParImpar = (numero) => {
      if (numero % 2 === 0) console.log(numero, 'es PAR');
      else console.log(numero, 'es IMPAR');
    };
    esParImpar(7);
    esParImpar(10);
  }, []);
      // 6) Array de meses y Switch (Ejercicio 7 del PDF)
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const mesActual = 10; // Octubre
    
    switch (mesActual) {
      case 1: console.log('Mes: Enero'); break;
      case 2: console.log('Mes: Febrero'); break;
      case 3: console.log('Mes: Marzo'); break;
      case 4: console.log('Mes: Abril'); break;
      case 5: console.log('Mes: Mayo'); break;
      case 6: console.log('Mes: Junio'); break;
      case 7: console.log('Mes: Julio'); break;
      case 8: console.log('Mes: Agosto'); break;
      case 9: console.log('Mes: Septiembre'); break;
      case 10: console.log('Mes: Octubre'); break;
      case 11: console.log('Mes: Noviembre'); break;
      case 12: console.log('Mes: Diciembre'); break;
      default: console.log('Mes inválido');
    }
    console.log('Array de meses completo:', meses);

    // 3D) Texto en rojo (Ejercicio 3D del PDF)
    console.log('%cMira Hacia Aquí!! (En rojo)', 'color: red; font-size: 16px; font-weight: bold;');

  return null; // Esto hace que NO se muestre nada en pantalla
}

export default DemoTP1;