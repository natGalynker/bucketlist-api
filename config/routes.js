'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

.get('/uploads', 'uploads#index')
.post('/uploads', 'uploads#create')

//entires routes
.get('/completed-entries', 'entries#indexCompleted')
.get('/user-completed', 'entries#indexUserCompleted')
.get('/entries', 'entries#index')
.get('/user-entries', 'entries#indexUserEntries')
.get('/entries/:id', 'entries#show')
.post('/entries', 'entries#create')
.patch('/entries/:id', 'entries#update')
.delete('/entries/:id', 'entries#destroy')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })

// all routes created
;
