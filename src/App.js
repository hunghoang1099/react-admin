import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import {UserList  } from './users/index';
import {PostList} from './posts/index';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;