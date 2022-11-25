import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'Measure'

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    temperatura: {
        type: Number, required: true
    },
    humedad: {
        type: Number, required: true
    },
    fecha: {
        type: Date, required: true, default: new Date()
    }
}, {
    versionKey: false,
    collection: modelName
});

export default model(modelName, schema);