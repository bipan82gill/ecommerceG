import bcrypt from 'bcryptjs';
const data =  {
    users: [
        {
            name:'Bipan',
            email:'bipan30.ca@gmail.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true,
        },
        {
            name:'john',
            email:'test@gmail.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false,
        }
    ],
    products : [{
        name:'Nike Slim',
        category:'shirts',
        image:'/images/p1.jpg',
        price:120,
        countInStock:10,
        brand:'Nike',
        rating:4.5,
        numReviews:10,
        description:'high quality',
    
},{
    name:'Addidas Slim',
    category:'shirts',
    image:'/images/p2.jpg',
    price:180,
    countInStock:20,
    brand:'Addidas',
    rating:4.5,
    numReviews:10,
    description:'high quality',

},
{
    name: 'Lacoste Free Shirt',
    category: 'Shirts',
    image: '/images/p3.jpg',
    price: 220,
    countInStock:15,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
},{
    name: 'Nike Slim Pant',
    category: 'Pants',
    image: '/images/p4.jpg',
    price: 78,
    countInStock:0,
    brand: 'Nike',
    rating: 3.5,
    numReviews: 14,
    description: 'high quality product',
},
{
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock:5,
      brand: 'Puma',
      rating: 3,
      numReviews: 10,
      description: 'high quality product',
},
{
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock:10,
      brand: 'Adidas',
      rating: 2.5,
      numReviews: 15,
      description: 'high quality product',
}

]
}
export default data;