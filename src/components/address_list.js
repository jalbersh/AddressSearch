import React from 'react';
import AddressListItem from './address_list_item';

const AddressList = (props) => {
    const addressItems = props.addresses.map((address) => {
        return (
            <AddressListItem
                onAddressSelect={props.onAddressSelect}
                key={address.etag}
                address={address} />
        )
    })
    return (
        <ul className="col-md-4 list-group">
          {addressItems}
        </ul>
    )
}

export default AddressList