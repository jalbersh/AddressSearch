import React from 'react'

const AddressDetail = ({address}) => {
    if (!address) {
        return <div>Loading...</div>
    }
    const addressId = address.id.addressId
    return (
        <div className="address-detail col-md-8">
            <div>
                some address here
            </div>
            <div className="details">
                <div>{address.snippet.title}</div>
                <div>{address.snippet.description}</div>
            </div>
        </div>
    )
}

export default AddressDetail;