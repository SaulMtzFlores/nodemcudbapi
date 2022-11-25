export default function (id:string){
    const configsObject = {
        
        // API CONFIGS
        port: 3115,
        origin: [
            '*'
        ],
        additionalHeaders: [
            'Authorization', 
            'authorization',
            'language',
            'Accept',
            'Content-Type'
        ],

        // DATABASE CONFIGS
        cloud: true,
        cnn: 'mongodb+srv://admin:admin@nodemcu.75owpbt.mongodb.net/?retryWrites=true&w=majority',
        local: 'mongodb://localhost/iot'
    }
    return configsObject[`${id}`];
}