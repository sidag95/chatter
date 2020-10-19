import React from "react";

export type Contact = {
  id: string;
  number: number;
  name?: string; // Name set by the current user
  defaultName: string; // Default Name set by the contact
};

export type ContactItemProps = {
  contact: Contact;
  selectChat: (id: string) => void;
}

export type   ContactListContextType = {
  contacts: Array<Contact>;
  isLoading: boolean;
  hasLoaded: boolean;
  error: Error | null;
};

export type ContactListControllerType = {
  children: React.ReactNode;
};

export type ContactListProps = {
  selectChat: (id: string) => void;
}