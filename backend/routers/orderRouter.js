import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express();

orderRouter.post('/',isAuth,expressAsyncHandler(async(req,res)=>{
    if(req.body.orderItems.lenght ===0){
        res.status(404).send({ message: 'Cart is empty'});
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAdress: req.body.shippingAdress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,

        });
        const createdOrder = await order.save();
        res.status(201).send({message :'New Order Created', order : createdOrder});
    }
}));

export default orderRouter;