# towatchlist-angular

To run this app, you will need :

### Prerequisites

Node, mongodb

Then, run this commands :

`sudo npm install -g nodemon`

`npm install -g @angular/cli@latest`

After that, you will have to open 4 command prompts to make it work :

First : `mongo` 

Second : `mongod`

Third - in the file you created to clone this repository : `nodemon`

Forth - in angular-src : `ng serve`

### MongoDB

If you want to see if the informations you entered in the website are entered in the database, you can enter this commands on your command prompt :

`show dbs`

`use name_db`

`show collections`

`db.collection_name.find().pretty();`

### Angular

If you want to create a new component - go in angular-src/src/app/components : `ng g component name_component`

If you want to create a new service - go in angular-src/src/app/services : `ng g service name_service`

--> Don't forget to import your new service into angular-src/src/app.module.ts

To build the app, run `ng built` but before that, make sure that you changed the output directory into `../public` in angular-src/angular-cli.json

### Sources

To do this app, I watched some tutorials :

[The center of my app, a youtube series called MEAN Stack, from front to back ](https://www.youtube.com/watch?v=uONz0lEWft0&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ&index=1)

[A youtube video of 1 hour to create my to-watch list](https://www.youtube.com/watch?v=oa9cnWTpqP8)


[This blog helped me with the delete function](http://thelillysblog.com/2016/11/02/MEAN-stack-with-Angular2/)

