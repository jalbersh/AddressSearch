import React from 'react'

const AddressListItem = ({address, onAddressSelect}) => {
    const imageUrl = address.snippet.thumbnails.default.url
    return (
        <li onClick={() => onAddressSelect(address)} className="list-group-item">
            <div className="address-list media" >
                <div className="media-left">
                    some icon for address here
                </div>
                <div className="media-body">
                    <div className="media-heading">{address.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default AddressListItem