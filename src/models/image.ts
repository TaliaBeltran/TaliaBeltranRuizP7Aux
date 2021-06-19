import { Schema, model, Document } from "mongoose";

export interface IImage extends Document {
    path: string;
    relativePath: string;
    filename: string;
    timestamp: Date;
}

const imgSchema = new Schema<IImage>({
    path: String,
    relativePath: String,
    filename: String,
    timestamp:{
        type: String,
        default: Date.now(),
    },
});

export default model<IImage>("image", imgSchema);