import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };
const CARD_GAP = 24;
const CARD_WIDTH = 320;

const EventCarousel = ({ events, isUpcoming }) => {
    console.log(events.length);
    
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [dragLimit, setDragLimit] = useState(0);

    useEffect(() => {
        if (containerRef.current && contentRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const contentWidth = contentRef.current.scrollWidth;
            const maxDrag = contentWidth - containerWidth;
            setDragLimit(-maxDrag);
        }
    }, [events]);

    return (
        <div
            ref={containerRef}
            className= {`relative  ${ events.length > 4 ? `overflow-x-scroll` : `overflow-hidden`} w-full `}
        >
            <motion.div
                ref={contentRef}
                className="flex"
                drag="x"
                dragConstraints={{ left: dragLimit, right: 0 }}
                style={{ x, gap: CARD_GAP }}
                transition={SPRING_OPTIONS}
            >
                {events.map((event) => (
                    

                <motion.div
                    key={event.id}
                    className="shrink-0 bg-white rounded-xl border hover:shadow-lg transition-all overflow-hidden"
                    style={{ width: CARD_WIDTH }}
                >
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4 space-y-2">
                        <h3 className="text-lg font-bold">{event.title}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(event.date).toLocaleString("en-IN", {
                                timeZone: "Asia/Kolkata",
                                dateStyle: "medium",
                                timeStyle: "short",
                            })}
                        </p>
                        <p className="text-sm text-gray-700">{event.description}</p>
                        {isUpcoming && event.registrationLink && (
                            <a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="content-center inline-block mt-3 px-28 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                            >
                                Register
                            </a>
                        )}
                    </div>
                </motion.div>
        ))}
            </motion.div>
        </div>
    );
};

export default EventCarousel;
