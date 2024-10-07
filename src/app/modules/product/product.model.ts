import { Schema } from "mongoose";
import { TProuduct } from "./product.interface";

const productSchema = new Schema<TProuduct>({
  name: {
    type: String,
    required: true,
  },
});
