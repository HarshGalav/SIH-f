/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Movies } from "@prisma/client";
import Link from "next/link";

interface MoviesContainerProps {
  id: number;
  title?: string;
  description?: string;
  release_date?: string; 
  poster?: string;
  age_rate?: number;
  ticket_price?: number;
  created_at?: string;
  aired_at?: string;
}

const MoviesContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesContainerProps | null>(null);

  const movies:MoviesContainerProps[]=[
    {
      "id": 1,
      "title": "Government Museum Chennai",
      "description": "The Government Museum Chennai, also known as the Egmore Museum, is one of the oldest museums in India. It houses a rich collection of archaeological and numismatic artifacts, along with sculptures, palm-leaf manuscripts, and Amravati paintings.",
      "release_date": "2010-07-16T00:00:00Z",
      "poster": "https://github.com/user-attachments/assets/1cfc7f68-41ab-428b-bae6-825ac43be6fc",
      "age_rate": 13,
      "ticket_price": 100,
      "created_at": "2024-09-08T10:00:00Z",
      "aired_at": "2010-07-16T00:00:00Z"
    },
    {
      "id": 2,
      "title": "CHILDREN'S MUSEUM",
      "description": "Children's Museum in Chennai is a fascinating place for kids to learn about history, science, and culture. It features interactive exhibits and displays that encourage young minds to explore and discover.",
      "release_date": "2014-11-07T00:00:00Z",
      "poster": "https://github.com/user-attachments/assets/6ed9b2e0-919e-4e40-a5ae-426a7c64a68f",
      "age_rate": 10,
      "ticket_price": 150,
      "created_at": "2024-09-08T10:01:00Z",
      "aired_at": "2014-11-07T00:00:00Z"
    },
    {
      "id": 3,
      "title": "DR. ARUN’S PHOTOGRAPHY AND VINTAGE CAMERA MUSEUM",
      "description": "Dr. Arun's Photography and Vintage Camera Museum showcases an impressive collection of vintage cameras and photographs, chronicling the history and evolution of photography in India and beyond.",
      "release_date": "2008-07-18T00:00:00Z",
      "poster": "https://github.com/user-attachments/assets/3ef3d59e-0f24-4b7b-be5c-9e06fe7f0616",
      "age_rate": 13,
      "ticket_price": 130,
      "created_at": "2024-09-08T10:02:00Z",
      "aired_at": "2008-07-18T00:00:00Z"
    },
    {
      "id": 4,
      "title": "Chennai Rail Museum",
      "description": "Chennai Rail Museum offers a fascinating glimpse into the history of Indian Railways with exhibits of vintage locomotives, carriages, and railway artifacts, making it a must-visit for train enthusiasts.",
      "release_date": "2019-05-30T00:00:00Z",
      "poster": "https://github.com/user-attachments/assets/e59c4b98-0332-4ab3-8072-79725c82a692",
      "age_rate": 15,
      "ticket_price": 100,
      "created_at": "2024-09-08T10:03:00Z",
      "aired_at": "2019-05-30T00:00:00Z"
    },
    {
      "id": 5,
      "title": "Vivekananda House",
      "description": "Vivekananda House, also known as Ice House, is a historical landmark in Chennai dedicated to the memory of Swami Vivekananda. It contains exhibits on his life and teachings, along with a meditation hall and library.",
      "release_date": "2019-04-26T00:00:00Z",
      "poster": "https://github.com/user-attachments/assets/a6fd9430-bd95-4af7-bbad-3ca4aedf147c",
      "age_rate": 10,
      "ticket_price": 120,
      "created_at": "2024-09-08T10:04:00Z",
      "aired_at": "2019-04-26T00:00:00Z"
    },
    {
      "id": 6,
      "title": "Fort St. George Museum",
      "description": "Fort St. George Museum is located within the historic fort built by the British in 1644. The museum houses artifacts from the colonial period, including weapons, uniforms, medals, and paintings.",
      "release_date": "2019-10-04T00:00:00Z",
      "poster": "https://github.com/user-attachments/assets/b820ffd9-e527-4072-8e46-32d552150d5e",
      "age_rate": 18,
      "ticket_price": 120,
      "created_at": "2024-09-08T10:05:00Z",
      "aired_at": "2019-10-04T00:00:00Z"
    },
    {
      "id": 7,
      "title": "National Art Gallery Chennai",
      "description": "The National Art Gallery Chennai, located within the Government Museum Complex, houses a fine collection of traditional and contemporary art, including paintings, sculptures, and decorative arts from across India.",
      "release_date": "1999-03-31T00:00:00Z",
      "poster": "https://github.com/user-attachments/assets/50a8d468-36d3-4c59-90a7-61084791669c",
      "age_rate": 15,
      "ticket_price": 20,
      "created_at": "2024-09-08T10:06:00Z",
      "aired_at": "1999-03-31T00:00:00Z"
    },
    {
      "id": 8,
      "title": "MGR Memorial House",
      "description": "MGR Memorial House is dedicated to M.G. Ramachandran, a prominent Tamil film actor and former Chief Minister of Tamil Nadu. The house features photographs, awards, and personal belongings of MGR.",
      "release_date": "2000-05-05T00:00:00Z",
      "poster": "https://example.com/posters/gladiator.jpg",
      "age_rate": 15,
      "ticket_price": 45,
      "created_at": "2024-09-08T10:07:00Z",
      "aired_at": "2000-05-05T00:00:00Z"
    },
    {
      "id": 9,
      "title": "Click Art Museum",
      "description": "Click Art Museum is a unique interactive museum featuring 3D art and optical illusions that provide visitors with fun photo opportunities. It's a great place for families and friends to enjoy creative and imaginative displays.",
      "release_date": "1972-03-24T00:00:00Z",
      "poster": "https://example.com/posters/godfather.jpg",
      "age_rate": 18,
      "ticket_price": 78,
      "created_at": "2024-09-08T10:08:00Z",
      "aired_at": "1972-03-24T00:00:00Z"
    },
    {
      "id": 10,
      "title": "Live Art Museum",
      "description": "Live Art Museum is a contemporary museum that showcases live art performances, installations, and exhibitions, providing a dynamic and engaging experience for visitors interested in modern art.",
      "release_date": "1994-09-22T00:00:00Z",
      "poster": "https://example.com/posters/shawshank.jpg",
      "age_rate": 15,
      "ticket_price": 57,
      "created_at": "2024-09-08T10:09:00Z",
      "aired_at": "1994-09-22T00:00:00Z"
    }
  ]
  

  const handleBookTicket = (movie: MoviesContainerProps) => {
    setSelectedMovie(movie);
    console.log("Selected movie data: ", movie);
    // Add any further logic here, such as navigating to a booking page or showing a modal
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 mt-4 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {Array.isArray(movies) && movies.map((movie) => {
          return (
            <div key={movie.id} className="group">
              <a href={"/movie/" + movie.id} className="group">
                <div className="aspect-h-5 aspect-w-3 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-10 xl:aspect-w-7">
                  <img
                    src={movie.poster as string}
                    alt={movie.title as string}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="relative w-full">
                  <div className="w-10/12">
                    <h3 className="mt-4 text-sm text-gray-700">{movie.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      INR {movie.ticket_price}
                    </p>
                  </div>
                  <div className="absolute right-0 top-1.5">
                    <div className="flex justify-center items-center w-6 h-6 bg-indigo-500 text-white rounded-xl p-4">
                      <span className="text-xs"> {movie.age_rate}</span>
                    </div>
                  </div>
                </div>
              </a>
              <button 
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={() => handleBookTicket(movie)}
              >
                Book Ticket
              </button>
            </div>
          );
        })}
      </div>



    </div>
  );
};

export default MoviesContainer;
