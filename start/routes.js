'use strict';


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
// Get

Route.get('getUsers', 'UserController.getUsers');


// Post
Route.post('users', 'UserController.store').validator('StoreUser');

Route.post('session', 'SessionController.store').validator('StoreSession')
;

Route.post('password', 'ForgotPasswordController.store').validator(
    'StoreForgortPassword',
);

Route.put('changePasswords', 'ForgotPasswordController.uptade').validator(
    'StoreChangePassword',
);
