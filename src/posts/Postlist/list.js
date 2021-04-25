import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';


const PostList = props => (
    <List {...props}>
        <Datagrid>
            <ReferenceField source="userId" reference="users">
            <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);
export default PostList;