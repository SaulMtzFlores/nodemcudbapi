import measureRoutes from './measures/routes';

export const Routes:any = [
    {
        method: 'GET',
        path: '/',
        options: {
            handler: function(req:any, h:any){ return h.response({time:new Date()})},
            auth: false,
        }
    },
    ...measureRoutes
]