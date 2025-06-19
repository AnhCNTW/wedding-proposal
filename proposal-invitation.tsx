"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

export default function ProposalInvitation() {
  const [currentScreen, setCurrentScreen] = useState<
    "greeting" | "invitation" | "gallery"
  >("greeting");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | null
  >(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  // Sample gallery images with romantic captions
  const galleryImages = [
    {
      src: "/1.webp?height=400&width=300",
      caption: "Our very first date ❤️",
    },
    {
      src: "/2.webp?height=400&width=300",
      caption: "Our first photo together 📸",
    },
    {
      src: "/3.webp?height=400&width=300",
      caption: "Our first adventure together 🗺️",
    },
    {
      src: "/4.webp?height=400&width=300",
      caption: "A beautiful moment with you 🌹",
    },
    {
      src: "/5.webp?height=400&width=300",
      caption: "Watching the sunset together 🌅",
    },
    {
      src: "/6.webp?height=400&width=300",
      caption: "Introducing you to my friends 👫",
    },
    {
      src: "/7.webp?height=400&width=300",
      caption: "A truly special date 💖",
    },
    {
      src: "/8.webp?height=400&width=300",
      caption: "The first time you brought me home 🏡",
    },
    {
      src: "/9.webp?height=400&width=300",
      caption: "Our first matching shoes 👟",
    },
    {
      src: "/10.webp?height=400&width=300",
      caption: "Our second trip together ✈️",
    },
    {
      src: "/11.webp?height=400&width=300",
      caption: "Celebrating Tet at your home for the first time 🧧",
    },
    {
      src: "/12.webp?height=400&width=300",
      caption: "Your birthday celebration 🎂",
    },
    {
      src: "/13.webp?height=400&width=300",
      caption: "Our third trip together 🌄",
    },
    {
      src: "/14.webp?height=400&width=300",
      caption: "Our fourth trip together 🌸",
    },
    {
      src: "/15.webp?height=400&width=300",
      caption: "That was really fun 🎉",
    },
  ];

  const handleAnimationEnd = () => {
    if (pendingIndex !== null) {
      setCurrentImageIndex(pendingIndex);
      setPendingIndex(null);
    }
    setAnimating(false);
    setAnimationDirection(null);
  };

  const nextImage = () => {
    if (animating) return;
    setAnimationDirection("left");
    setAnimating(true);
    setPendingIndex((currentImageIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (animating) return;
    setAnimationDirection("right");
    setAnimating(true);
    setPendingIndex(
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleDotClick = (index: number) => {
    if (animating || index === currentImageIndex) return;
    setAnimationDirection(index > currentImageIndex ? "left" : "right");
    setAnimating(true);
    setPendingIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background outside phone frame (optional, for aesthetics) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-900 via-black to-purple-900 opacity-80" />

      {/* iPhone 13 Frame */}
      <div
        className="relative z-10 flex flex-col"
        style={{
          width: 390,
          height: 844,
          boxShadow: "0 0 40px 8px rgba(0,0,0,0.5)",
          overflow: "hidden",
          background: "#000",
        }}
      >
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
        <div className="relative z-10 flex flex-col items-center w-full h-full px-6 text-center overflow-hidden">
          {currentScreen === "greeting" && (
            <div className="flex flex-col items-center justify-center h-[90%]">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-pink-400 leading-tight">
                    Hello Mrs. Nguyễn Hoàng Diệu Thơm,
                  </h1>
                  <p className="text-xl font-bold md:text-2xl text-white">
                    Is that you?
                  </p>
                </div>

                <Button
                  onClick={() => setCurrentScreen("invitation")}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  Yes, I'm Thơm
                </Button>
              </div>
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
                <h3 className="text-lg font-semibold text-white mb-4">
                  Party Details
                </h3>

                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
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
                    <div className="w-2 h-2 bg-white rounded-full"></div>
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
            <div className="flex flex-col items-center justify-center h-[90%]">
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
                    <div
                      className="relative aspect-[3/4] overflow-hidden rounded-xl"
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    >
                      <img
                        src={
                          galleryImages[currentImageIndex].src ||
                          "/placeholder.svg"
                        }
                        alt={galleryImages[currentImageIndex].caption}
                        className={`w-full h-full object-cover transition-all duration-500
                        ${
                          animating && animationDirection === "left"
                            ? "animate-slide-out-left"
                            : ""
                        }
                        ${
                          animating && animationDirection === "right"
                            ? "animate-slide-out-right"
                            : ""
                        }
                      `}
                        onAnimationEnd={handleAnimationEnd}
                      />
                      {pendingIndex !== null && (
                        <img
                          src={
                            galleryImages[pendingIndex].src ||
                            "/placeholder.svg"
                          }
                          alt={galleryImages[pendingIndex].caption}
                          className={`w-full h-full object-cover transition-all duration-500 absolute top-0 left-0
                          ${
                            animating && animationDirection === "left"
                              ? "animate-slide-in-right"
                              : ""
                          }
                          ${
                            animating && animationDirection === "right"
                              ? "animate-slide-in-left"
                              : ""
                          }
                        `}
                        />
                      )}

                      {/* Navigation Buttons */}
                      <Button
                        onClick={prevImage}
                        variant="ghost"
                        size="sm"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2  bg-white/50 text-white rounded-full p-2"
                      >
                        <ChevronLeft size={20} />
                      </Button>

                      <Button
                        onClick={nextImage}
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 text-white rounded-full p-2"
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
                          onClick={() => handleDotClick(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-pink-400"
                              : "bg-gray-600"
                          }`}
                          disabled={animating}
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
                    Every picture tells our story ��
                  </p>
                </div>
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

          .animate-slide-out-left {
            animation: slideOutLeft 0.5s forwards;
            z-index: 1;
          }
          .animate-slide-in-right {
            animation: slideInRight 0.5s forwards;
            z-index: 2;
          }
          .animate-slide-out-right {
            animation: slideOutRight 0.5s forwards;
            z-index: 1;
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.5s forwards;
            z-index: 2;
          }

          @keyframes slideOutLeft {
            0% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0.5;
              transform: translateX(-100%);
            }
          }
          @keyframes slideInRight {
            0% {
              opacity: 0.5;
              transform: translateX(100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideOutRight {
            0% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0.5;
              transform: translateX(100%);
            }
          }
          @keyframes slideInLeft {
            0% {
              opacity: 0.5;
              transform: translateX(-100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
