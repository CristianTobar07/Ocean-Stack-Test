import mongoose, { Schema, Document } from "mongoose";

export interface ProductsType extends Document {
  name: string;
  price: number;
  quantity: number;
}

const productsSchema: Schema<ProductsType> = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

productsSchema.methods.toJSON = function () {
  const { __v, _id, ...products } = this.toObject();
  products.uid = _id;
  return products;
};

const productsModel = mongoose.model<ProductsType>("products", productsSchema);

export { productsModel, productsSchema };
