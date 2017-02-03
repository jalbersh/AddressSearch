import React from 'react'

const AddressDetail = ({address}) => {
    if (!address) {
        return <div>status:</div>
    }
    const addressDetail = address
    return (
        <div className="address-detail col-md-8">
            <div>
                some address here
            </div>
            <div className="details">
                <div>{address}</div>
            </div>
        </div>
    )
}

export default AddressDetail;