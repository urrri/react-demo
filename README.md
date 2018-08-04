##React demo application.

To run it, clone or download this repository and execute the following:

```bash
$ npm install
$ npm run start-data-server
$ npm run start
```

## Project details
The project is based on React and [DVA](https://github.com/dvajs/dva) framework, which transparently integrates:
- Redux
- Saga (middleware for Redux)
- Router
- Some other cool technologies

DVA presents Model, which is a combination of Redux namespace & reducers and Saga effects. It also forces naming convention for Action types: `<namespace>/<reducer_or_effect_name>`. 

The build system uses [Roadhog](https://github.com/sorrycc/roadhog) - a configurable version of create-react-app

## Implementation notes
I used lazy loader for images, but a better way for long and very long lists is using one of the dynamic list types:
- pagination - loading one page of the items per time
- virtual - loading an item on scroll to the above mentioned item (total number of items is **known**) 
- infinite - incremental loading of next items on scroll to the end (total number of items is **unknown**)

In our case we can use Virtual list, like [react-virtualized](https://github.com/bvaughn/react-virtualized)

The same is relevant to the item fetching. It's worth to load huge lists of data by chunks on the requests of dynamic list component. 
 
