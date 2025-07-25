import React, { useState } from "react";
import EventCarousel from "./EventCarousel"; 

const EventsTabs = ({ events }) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const nowUTC = new Date().toISOString();

  const upcoming = events.filter((event) => {
    const eventUTC = new Date(event.date).toISOString();
    return eventUTC > nowUTC;
  });

  const previous = events.filter((event) => {
    const eventUTC = new Date(event.date).toISOString();
    return eventUTC <= nowUTC;
  });

  return (
    <section className="min-h-[100vh] w-full px-4 border-t-2">
      <h1 className="text-center text-7xl mb-10 mt-10 font-bold">Events</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-5 mb-6 border-t py-2 mx-20">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-5 py-2 border-b-2 ${
            activeTab === "upcoming"
              ? "border-blue-500 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("previous")}
          className={`px-5 py-2 border-b-2 ${
            activeTab === "previous"
              ? "border-blue-500 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
        >
          Previous
        </button>
      </div>

      {/* Carousel View */}
      <div className="mt-6">
        {activeTab === "upcoming" && (
          upcoming.length ? (
            <EventCarousel events={upcoming} isUpcoming={true} />
          ) : (
            <p className="text-center text-gray-500">No upcoming events.</p>
          )
        )}
        {activeTab === "previous" && (
          previous.length ? (
            <EventCarousel events={previous} isUpcoming={false} />
          ) : (
            <p className="text-center text-gray-500">No previous events.</p>
          )
        )}
      </div>
    </section>
  );
};

export default EventsTabs;
