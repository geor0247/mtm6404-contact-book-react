import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../db';

function HomePage() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const contactSnapshot = await getDocs(collection(db, 'contacts'));
      const contactList = contactSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setContacts(contactList.sort((a, b) => a.lastName.localeCompare(b.lastName)));
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact =>
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <h1>Contact Book</h1>
      <input
        type="text"
        className='searchbox'
        placeholder="Search Contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link to="/add">Add New Contact</Link>
      <hr />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/view/${contact.id}`}>{contact.lastName}, {contact.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;