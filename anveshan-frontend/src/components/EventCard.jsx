import React from "react";

const EventCard = ({ event, isUpcoming }) => {
  const { image, title, description, date, location } = event;
  const eventDate = new Date(date).toLocaleString();

  return (

    <div className="bg-white rounded-xl shadow hover:shadow-md transition-all overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{eventDate}</p>
        <p className="text-sm text-gray-700">{description}</p>
        {isUpcoming && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-3 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-700 transition"
          >
            Register
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
