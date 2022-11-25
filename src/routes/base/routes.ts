import { _create, _delete, _edit, _findById, _getAll } from ".";
import { deleteModel, deleteResponse, editModel, editResponse, findModel, newResponse } from "../../routes/base.validators";
import { failAction } from "../../core/joi";
import { baseModel, editModelV, newModel } from "./validators";

const prefix:string = '/base';

export default [
    {
        method: 'GET',
        path: `${prefix}/{id}`,
        options: {
            handler: _findById,
            auth: 'jwt',
            description: 'Find resource by ID',
            // validate: {
            //     // headers: 
            //     params: findModel,
            //     failAction
            // },
            response: {
                schema: baseModel,
                failAction
            }
        }
    },
    {
        method: 'GET',
        path: `${prefix}`,
        options: {
            handler: _getAll,
            auth: 'jwt',
            description: 'Find list of resources',
            // validate: {
            //     // headers: 
            //     params: findModel,
            //     failAction
            // },
            response: {
                schema: baseModel,
                failAction
            }
        }
    },
    {
        method: 'POST',
        path: `${prefix}`,
        options: {
            handler: _create,
            auth: 'jwt',
            description: 'Create resource',
            validate: {
                // headers: 
                payload: newModel,
                failAction
            },
            response: {
                schema: newResponse,
                failAction
            }
        }
    },
    {
        method: 'PUT',
        path: `${prefix}/{id}`,
        options: {
            handler: _edit,
            auth: 'jwt',
            description: 'Edit resource',
            validate: {
                // headers: 
                params: editModel,
                payload: editModelV,
                failAction
            },
            response: {
                schema: editResponse,
                failAction
            }
        }
    },
    {
        method: 'DELETE',
        path: `${prefix}/{id}`,
        options: {
            handler: _delete,
            auth: 'jwt',
            description: 'Delete resource',
            validate: {
                // headers: 
                params: deleteModel,
                failAction
            },
            response: {
                schema: deleteResponse,
                failAction
            }
        }
    }
]