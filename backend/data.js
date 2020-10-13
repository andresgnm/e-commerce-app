import bcrypt from 'bcryptjs'

const data = {
    users:[
        {   name:'Andrés',
            email:'andregnm13@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {   name:'Viviana',
            email:'andre_nm13@hotmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        }
    ],
    products:[
        {
        
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews:10,
            description:'High quality product',

        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image:'/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews:10,
            description:'High quality product',

        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image:'/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 1.0,
            numReviews:17,
            description:'High quality product',

        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image:'/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews:14,
            description:'High quality product',

        },
        {
            name: 'Puma Slim Pant',
            category: 'Pants',
            image:'/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews:10,
            description:'High quality product',

        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image:'/images/p6.jpg',
            price: 120,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews:15,
            description:'High quality product',

        },
    ],
};
export default data;