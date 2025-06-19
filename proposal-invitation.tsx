"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

export default function ProposalInvitation() {
  const [currentScreen, setCurrentScreen] = useState<
    "greeting" | "invitation" | "gallery"
  >("greeting");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery images with romantic captions
  const galleryImages = [
    {
      src: "/1.jpg?height=400&width=300",
      caption: "Our very first date ❤️",
    },
    {
      src: "/2.jpg?height=400&width=300",
      caption: "Our first photo together 📸",
    },
    {
      src: "/3.jpg?height=400&width=300",
      caption: "Our first adventure together 🗺️",
    },
    {
      src: "/4.jpg?height=400&width=300",
      caption: "A beautiful moment with you 🌹",
    },
    {
      src: "/5.jpg?height=400&width=300",
      caption: "Watching the sunset together 🌅",
    },
    {
      src: "/6.jpg?height=400&width=300",
      caption: "Introducing you to my friends 👫",
    },
    {
      src: "/7.jpg?height=400&width=300",
      caption: "A truly special date 💖",
    },
    {
      src: "/8.jpg?height=400&width=300",
      caption: "The first time you brought me home 🏡",
    },
    {
      src: "/9.jpg?height=400&width=300",
      caption: "Our first matching shoes 👟",
    },
    {
      src: "/10.jpg?height=400&width=300",
      caption: "Our second trip together ✈️",
    },
    {
      src: "/11.jpg?height=400&width=300",
      caption: "Celebrating Tet at your home for the first time 🧧",
    },
    {
      src: "/12.jpg?height=400&width=300",
      caption: "Your birthday celebration 🎂",
    },
    {
      src: "/13.jpg?height=400&width=300",
      caption: "Our third trip together 🌄",
    },
    {
      src: "/14.jpg?height=400&width=300",
      caption: "Our fourth trip together 🌸",
    },
    {
      src: "/15.jpg?height=400&width=300",
      caption: "That was really fun 🎉",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            suppressHydrationWarning
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            suppressHydrationWarning
            key={i}
            className="absolute text-pink-400 animate-bounce"
            size={20 + Math.random() * 20}
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {currentScreen === "greeting" && (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-pink-200 leading-tight">
                Hello Mrs Natalia,
              </h1>
              <p className="text-xl md:text-2xl text-white font-light">
                is that you?
              </p>
            </div>

            <Button
              onClick={() => setCurrentScreen("invitation")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Yes, I'm
            </Button>
          </div>
        )}

        {currentScreen === "invitation" && (
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <Heart
                className="mx-auto text-pink-400 animate-pulse"
                size={60}
              />
              <h2 className="text-2xl md:text-3xl font-bold text-pink-200 leading-relaxed">
                I would like to invite you to the party.
                <br />
                Please attend !!
              </h2>
            </div>

            {/* Party Details */}
            <div className="bg-black/50 backdrop-blur-sm border border-pink-300/30 rounded-2xl p-6 space-y-4 max-w-sm mx-auto">
              <h3 className="text-lg font-semibold text-pink-300 mb-4">
                Party Details
              </h3>

              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div>
                    <p className="text-pink-200 font-medium">Date</p>
                    <p className="text-white">Tuesday, June 24th, 2025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div>
                    <p className="text-pink-200 font-medium">Time</p>
                    <p className="text-white">7:00 PM - 11:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div>
                    <p className="text-pink-200 font-medium">Location</p>
                    <p className="text-white">Gent Steak</p>
                    <p className="text-gray-300 text-sm">
                      5 Bui Thi Xuan Ward, Hai Ba Trung District
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div>
                    <p className="text-pink-200 font-medium">Dress Code</p>
                    <p className="text-white">Whatever you want</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <Heart className="text-red-400 animate-bounce" size={24} />
              <Heart
                className="text-pink-400 animate-bounce"
                size={28}
                style={{ animationDelay: "0.2s" }}
              />
              <Heart
                className="text-red-400 animate-bounce"
                size={24}
                style={{ animationDelay: "0.4s" }}
              />
            </div>

            <div className="space-y-4">
              <p className="text-pink-200 text-sm italic">
                Can't wait to celebrate with you! 💕
              </p>

              <Button
                onClick={() => setCurrentScreen("gallery")}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 text-sm font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                View Our Memories 📸
              </Button>
            </div>
          </div>
        )}

        {currentScreen === "gallery" && (
          <div className="space-y-6 animate-slide-up w-full max-w-sm mx-auto">
            {/* Gallery Header */}
            <div className="flex items-center justify-between">
              <Button
                onClick={() => setCurrentScreen("invitation")}
                variant="ghost"
                size="sm"
                className="text-pink-300 hover:text-pink-200"
              >
                <ArrowLeft size={20} />
              </Button>
              <h3 className="text-xl font-bold text-pink-200">
                Our Journey Together
              </h3>
              <div className="w-8"></div>
            </div>

            {/* Image Display */}
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-sm border border-pink-300/30 rounded-2xl p-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={
                      galleryImages[currentImageIndex].src || "/placeholder.svg"
                    }
                    alt={galleryImages[currentImageIndex].caption}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Navigation Buttons */}
                  <Button
                    onClick={prevImage}
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  >
                    <ChevronLeft size={20} />
                  </Button>

                  <Button
                    onClick={nextImage}
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>

                {/* Image Caption */}
                <div className="mt-4 text-center">
                  <p className="text-pink-200 font-medium">
                    {galleryImages[currentImageIndex].caption}
                  </p>
                </div>

                {/* Image Counter */}
                <div className="flex justify-center mt-3 space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-pink-400"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Footer */}
            <div className="text-center space-y-2">
              <p className="text-pink-200 text-sm">
                {currentImageIndex + 1} of {galleryImages.length}
              </p>
              <p className="text-gray-300 text-xs italic">
                Every picture tells our story 💕
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
