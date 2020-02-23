# Programación Orientada a Objetos
* Es un Paradigma de programación.
* Es el más usado hoy en día.
* Aplicable a muchisimos lenguajes de programación.

## Paradigma
* Es una forma de pensar o actuar, una filosofia.
* Una serie de patrones o modelos a seguir.
* Un planteamiento común.

## ¿Qué es un Objeto?
* En la POO todo es un objeto.
* Un objeto es una abstraccion del mundo real.
* Es una representación del estado y las acciones que puede realizar algo o alguien. 

## Atributos
* Caracteristicas del objeto
* Son modificables y accesibles

## Metodos

* Acciones del objeto
* Son modificables y accecibles

## Objetos Literales - Sintaxis
```javascript
    const nombreObjeto = {
        atributo : valor,
        atributo : valor,
        metodo() => {

        }
    }

    const persona = {
        nombre : 'Beto',,
        edad : 32,
        saludar() => {
            console.log(`Hola ${this.nombre}`)
        }
    }
```

## Prototipos (Clases)
* Es la base de toda la programacion.
* Ya que todo es un objeto, a la vez todo deb de partir de un prototipo

```javascript
class NombreClase{
    //variables
    let variable1;
    let variable2;
    //constructor
    constructor(parametro1,parametro2){
        this.variable1=parametro1;
        this.variable2=parametro2;
    }
}
```

## Instanciando o creando un objeto del prototipo(clase)
```javascript
    let beto = new NombreClase("valorParametro1","valorParametro2");
    console.log(beto);
```

## this(Scope)
* A partir de ES6 el alcance del this se limita al objeto declarado.
* De una forma global, el this seria igual a window.

## Métodos(funciones)

```js
    sumar(parametro1 = 1, parametro2){
        return parametro1 + parametro2;
    }

    //llamando al metodo
    console.log(sumar(5));  //imprimiria 6
```

## Herencia
* Atributos y metodos que pueden heredar varios hijos(subclases) de la clase padre(superclase).

Sintaxis:
```js
    // clase Padre
    class Usuario{
        //constructor
        constructor(par1,par2){
            this.par1=par1;
            this.par2=par2;
        }
        //metodos
        metodo(){
            //
        }
    }

    // clase Hijo
    class Profesor extends Usuario{
        let var3;
        constructor(par1,par2,par3){
            super(par1,par2);
            this.par3 = par3;
        }
    }
    
```
