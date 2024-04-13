import * as React from 'react';

interface EmailTemplateProps {
    fullName: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    message
}) => (
  <div>
    <h1>You've received a message!</h1>
    <h3>Name: {fullName}</h3>
    <h3>Email: {email}</h3>
    <p>{message}</p>
  </div>
);
