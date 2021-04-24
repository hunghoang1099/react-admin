import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

const UserList = ({...props}) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="email" />
            <TextField source="first_name" />
            <EmailField source="last_name" />
            <TextField source="avatar" />
        </Datagrid>
    </List>
);
export default UserList;