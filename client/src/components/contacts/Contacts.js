import React, { useContext , Fragment, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts , filtered , getContacts , loading} = contactContext;

    useEffect(() => {
        getContacts();
        //eslint-disable-next-line
    },[])
    if(contacts.length === 0 && loading){
        return (
            <Spinner />
        )
    }
    else if(contacts.length === 0){
        return <h4>Please add a contact</h4>
        
    }
    

    return (
        <Fragment>
            
            {filtered !== null ? filtered.map( contact => (
                <ContactItem key = {contact._id} contact = {contact}/>
            )): contacts.map(contact => (
                <ContactItem key = {contact._id} contact = {contact}/>
            ))}
            
            
        </Fragment>
    )
}

export default Contacts
