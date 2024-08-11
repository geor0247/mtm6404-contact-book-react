import React, { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import db from '../db';

function EditContactPage() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = await getDoc(doc(db, 'contacts', id));
      setFirstName(contactDoc.data().firstName);
      setLastName(contactDoc.data().lastName);
      setEmail(contactDoc.data().email);
    };
    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, 'contacts', id), {
      firstName,
      lastName,
      email
    });
    navigate(`/view/${id}`);
  };


  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your first name..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write your last name..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Type in your e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
}

export default EditContactPage;