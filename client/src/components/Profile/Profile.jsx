import React from 'react'
import Layout from '../Layout/Layout'

export default function Profile(props) {
    return (
        <Layout user={props.user}>
        <div>
            {props.user?.username}
            {console.log(props.user)}
        </div>
        </Layout>
    )
}
