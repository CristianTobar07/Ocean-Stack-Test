import mongoose, { Schema, Document } from "mongoose";

type ProductsOrder = {
  uid: string;
  quantity: number;
};

export interface OrdersType extends Document {
  products: ProductsOrder[];
  date: Date;
}

const ordersSchema: Schema<OrdersType> = new Schema({
  products: {
    type: [
      {
        _id: false,
        uid: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

ordersSchema.methods.toJSON = function () {
  const { __v, _id, ...order } = this.toObject();
  order.uid = _id;
  return order;
};

const ordersModel = mongoose.model<OrdersType>("orders", ordersSchema);

export { ordersModel, ordersSchema };
