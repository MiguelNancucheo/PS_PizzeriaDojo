// script de Pizería Dojo

//declaracion de la pizza
let pizza = {
    tipoCorteza: "" ,
    tipoSalsa: "" ,
    tiposQuesos: [] ,
    tipoingredientes: [] ,
    pizzaOven : function () {
        console.log("  Tipo de Corteza           :" + this.tipoCorteza);
        console.log("  Tipo de Salsa             :" + this.tipoSalsa);
        console.log("  Tipo de Quesos            :" + this.tiposQuesos);
        console.log("  Ingredientes de la Salsa  :" + this.tipoingredientes);
    } ,
    creaPizza : function (corteza,salsa,quesos,ingredientes) {
        this.tipoCorteza = corteza;
        this.tipoSalsa =salsa;
        this.tiposQuesos = quesos;
        this.tipoingredientes =ingredientes;
    }
}
//opciones de pizza
let opcionesPizza = {
    opc_Corteza : ["lanzada a mano","Estilo Chicago","Piedra","borde con queso"] ,
    opc_Salsa : ["Tradicional","marinara","sin salsa","italiana","barbecue"] ,
    opc_Quesos : ["mozzarella","feta","azul", "4 quesos"], 
    opc_Ingredientes : ["pepperoni","salchicha","champiñones","aceitunas","cebollas","carne","tomates","mas queso","piña","mariscos"],
    alea_corteza : function () {
        let indice = 0, largo = this.opc_Corteza.length;
        indice = Math.floor(Math.random() * largo);
        return this.opc_Corteza[indice];
    },
    alea_salsa : function () {
        let indice = 0, largo = this.opc_Salsa.length;
        indice = Math.floor(Math.random() * largo);
        return this.opc_Salsa[indice];
    },
    alea_quesos : function () {
        let indice = 0, largo = this.opc_Quesos.length;
        indice = Math.floor(Math.random() * largo);
        return this.opc_Quesos[indice];
    },
    alea_ingredientes : function () {
        let indice = 0, largo = this.opc_Ingredientes.length;
        indice = Math.floor(Math.random() * largo);
        return this.opc_Ingredientes[indice];
    }
}

//creando una piza
let tipo_salsas = [];
let tipo_ingredientes =[];
tipo_salsas = ["mozzarella"];
tipo_ingredientes = ["pepperoni", "salchicha"];
pizza.creaPizza("Estilo Chicago","Tradicional",tipo_salsas,tipo_ingredientes);
console.log("primera pizza");
pizza.pizzaOven();

//creando otra pizza
console.log("segunda pizza");
tipo_salsas = ["mozzarella", "feta"];
tipo_ingredientes = ["champiñones", "aceitunas", "cebollas"];
pizza.creaPizza("lanzada a mano","marinara",tipo_salsas,tipo_ingredientes);
pizza.pizzaOven();

//otras dos Pizas
console.log("otras dos pizzas");
console.log(" pizza 1");
tipo_salsas = ["mozzarella", "azul"];
tipo_ingredientes = ["carne", "aceitunas", "tomate"];
pizza.creaPizza("Piedra","sin salsa",tipo_salsas,tipo_ingredientes);
pizza.pizzaOven();

console.log(" pizza 2");
tipo_salsas = ["4 quesos"];
tipo_ingredientes = ["pepinillos", "aceitunas", "tomate"];
pizza.creaPizza("borde con queso","italiana",tipo_salsas,tipo_ingredientes);
pizza.pizzaOven();

//pizza random
console.log("pizza random");
let ran_corteza= opcionesPizza.alea_corteza();
let ran_salsas = opcionesPizza.alea_salsa();
let ran_quesos = [];
let ran_ingredientes =[];
ran_quesos[0] = opcionesPizza.alea_corteza();
ran_ingredientes[0] = opcionesPizza.alea_ingredientes()
ran_ingredientes[1] = opcionesPizza.alea_ingredientes()
pizza.creaPizza(ran_corteza,ran_salsas,ran_quesos,ran_ingredientes);
pizza.pizzaOven();

