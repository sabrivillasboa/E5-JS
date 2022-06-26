const pizzas=[{
    id: 1,
    nombre:'Fugazzeta',
    ingredientes: ['cebolla', 'muzzarella', 'aceituna'],
    precio: 500,
    imagen: 'https://img-global.cpcdn.com/recipes/973aa4b925d605e7/400x400cq70/photo.jpg',
},{
    id: 2,
    nombre:'Calabresa',
    ingredientes: ['longaniza', 'muzzarella'],
    precio: 800,
    imagen: 'https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg'
},{
    id: 3,
    nombre:'Napolitana',
    ingredientes: ['tomate','aceite de oliva','ajo','muzzarella'],
    precio: 700,
    imagen: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/La-pizza-napolitana-es-declarada-patrimonio-de-la-humanidad.jpg'
},{
    id: 4,
    nombre:'Especial',
    ingredientes: ['jamon','morron','muzzarella'],
    precio: 800,
    imagen: 'https://admin.daskalos.com.ar/Content/Images/Shop/Productos/95CED0BB-BD0E-40B2-AA36-FB3225D99348/producto_b2731cd8-c63f-4905-b952-d35e8018d22e_64_734392fb-3f12-486f-a003-6019ad8a5d00.jpg'
},{
    id: 5,
    nombre:'Muzzarella',
    ingredientes: ['muzzarella','aceitunas'],
    precio: 600,
    imagen: 'https://quem.com.ar/wp-content/uploads/2018/05/Pizza-e1584547627773.jpg'
},{
    id: 6,
    nombre:'con Huevo duro',
    ingredientes: ['huevo','muzzarella', 'aceitunas'],
    precio: 700,
    imagen: 'https://images.deliveryhero.io/image/pedidosya/products/471112-1d01ed49-ac49-4636-bf4b-dbcb1f5eb6e3.jpg?quality=90&width=248'
},
];

const arrayStorage = localStorage.setItem ('pizzas', JSON.stringify(pizzas));

const containerCard=document.createElement('section');
const inputCard= document.createElement('input');
// const containerInput= document.createElement('div');
containerCard.appendChild(inputCard);
// containerCard.appendChild(containerInput);

const articulo= pizzas.forEach(pizza=>{
    const divCard=document.createElement('div');
    containerCard.appendChild(divCard);

    const nameCard=document.createElement('h2');
    nameCard.innerText=`Pizza "${pizza.nombre}"`;
    divCard.appendChild(nameCard);

    const ingredientesCard= document.createElement('p');
    ingredientesCard.innerText= `Ingredientes: ${pizza.ingredientes}`;
    divCard.appendChild(ingredientesCard);

    const precioCard = document.createElement('p');
    precioCard.innerText= `Precio: $${pizza.precio}`;
    divCard.appendChild(precioCard);
})

// const containerCard=document.createElement('section');
// const inputCard= document.createElement('input'); 
// const divCard=document.createElement('div');
// containerCard.appendChild(inputCard);
// containerCard.appendChild(divCard);

// const imgCard=document.createElement('div');

// const nameCard=document.createElement('h2');

// const ingredientesCard= document.createElement('p');
// const precioCard = document.createElement('p');

// divCard.appendChild(imgCard);
// divCard.appendChild(nameCard);
// divCard.appendChild(ingredientesCard);
// divCard.appendChild(precioCard);

document.body.appendChild(containerCard);
