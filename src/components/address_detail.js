import React from 'react'

const AddressDetail = ({address}) => {
    if (!address) {
        return <div>Loading...</div>
    }
    const addressId = address.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="address-detail col-md-8">
            <div>
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{address.snippet.title}</div>
                <div>{address.snippet.description}</div>
            </div>
        </div>
    )
}

export default AddressDetail;