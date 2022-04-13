import React from 'react'

export default function Alert(props) {
    
    const{alert}=props
    return (
        props.alert && <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{alert.type}</strong> {props.alert.msg}
        </div>
    )
}
