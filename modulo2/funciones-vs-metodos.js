// Capacidades que tienen las funciones al igual que otros objetos

//1. Pasara funciones como argumentos -> callback

function a () {}
function b (a) {}
b(a)

//2. Retornar funciones -> closure
function a () {
    function b () {}
    return b
}

//3. asignar funciones a variables -> expresion de funcion
const b = function () {}

//4. Tener propiedades y metodos
function a () {}
const obj = {}
a.call(obj)

//5. Anidar funciones -> Nested functions
function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()

//6. Es posible almacenar funciones en objetos
const rocket = {
    name: 'Falcon 1',
    launchMessage: function launchMessage() {
        console.log('Liftoff')
    }
}

rocket.launchMessage()