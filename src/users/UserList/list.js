import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from '../../shared/my-url-field';

const UserList = ({...props}) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
export default UserList;