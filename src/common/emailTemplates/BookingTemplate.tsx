import React from "react";

export interface BookingTemplateProps {
  firstName?: string;
  lastName?: string;
  startDate?: string;
  endDate?: string | null;
  hours?: string | null;
  activity?: string;
  level?: string;
  people?: number | null;
  phone?: string;
  email?: string;
  message?: string | null;
}

const BookingTemplate: React.FC<Readonly<BookingTemplateProps>> = ({
  firstName,
  lastName,
  startDate,
  endDate,
  hours,
  activity,
  level,
  people,
  phone,
  email,
  message,
}) => (
  <div>
    <h1>Nuova richiesta di prenotazione — lorenzopanzera.com</h1>

    <p>
      <strong>Nome:</strong> {firstName} {lastName}
      <br />
      <strong>Email:</strong> {email}
      <br />
      <strong>Telefono:</strong> {phone}
    </p>

    <h2>Dettagli prenotazione</h2>
    <p>
      <strong>Attività:</strong> {activity}
      <br />
      <strong>Livello:</strong> {level}
      <br />
      <strong>Persone:</strong> {people}
      <br />
      <strong>Data inizio:</strong> {startDate}
      <br />
      <strong>Data fine:</strong> {endDate || "-"}
      <br />
      <strong>Durata / Ore:</strong> {hours || "-"}
    </p>

    <h3>Messaggio cliente</h3>
    <p>{message || "(nessun messaggio)"}</p>
  </div>
);

export default BookingTemplate;
