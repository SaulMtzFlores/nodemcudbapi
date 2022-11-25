import { _create, _delete, _edit, _findById, _getAll } from ".";

const prefix:string = '/measures';

export default [
    {
        method: 'GET',
        path: `${prefix}/{id}`,
        options: {
            handler: _findById,
            description: 'Find resource by ID',
        }
    },
    {
        method: 'GET',
        path: `${prefix}`,
        options: {
            handler: _getAll,
            description: 'Find list of resources',
        }
    },
    {
        method: 'POST',
        path: `${prefix}`,
        options: {
            handler: _create,
            description: 'Create resource',
        }
    },
    {
        method: 'PUT',
        path: `${prefix}/{id}`,
        options: {
            handler: _edit,
            description: 'Edit resource',
        }
    },
    {
        method: 'DELETE',
        path: `${prefix}/{id}`,
        options: {
            handler: _delete,
            description: 'Delete resource',
        }
    }
]