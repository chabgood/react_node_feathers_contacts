import React from "react";
import { Card } from "semantic-ui-react";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
  const cards = () => {
    return contacts.map(contact => {
      return <ContactCard key={contact._id} contact={contact} />;
    });
  };

  return <Card.Group>{cards()}</Card.Group>;
}
