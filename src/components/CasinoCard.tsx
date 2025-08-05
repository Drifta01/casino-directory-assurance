"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Casino interface definition
export interface Casino {
  id: string;
  name: string;
  nameImage: string;

  rating: number;
  trustScore: number;
  bonus: string;
  freeSpins?: number;
  wagering: string;
  minDeposit: string;
  licenseCountry: string;

  features: string[];
  paymentMethods: string[];
  gameProviders: string[];
  description: string;
  affiliateLink: string;
  reviewLink: string;
  established: string;
  restrictions: string[];
  liveChatAvailable?: boolean;
  mobileOptimized: boolean;
  vipProgram: boolean;
}

interface CasinoCardProps {
  casino: Casino;
  featured?: boolean;
}

const CasinoCard: React.FC<CasinoCardProps> = ({ casino, featured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [nameImageFailed, setNameImageFailed] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNameImageError = () => {
    setNameImageFailed(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < Math.floor(rating) ? "text-yellow-400" : i < rating ? "text-yellow-300" : "text-gray-600"
        }`}
      >
        ★
      </span>
    ));
  };

  const getTrustBadgeColor = (score: number) => {
    if (score >= 9) return "bg-green-500";
    if (score >= 7) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        featured
          ? "bg-gradient-to-br from-black/80 via-gray-900/80 to-green-900/60 ring-2 ring-green-400/50 shadow-2xl shadow-green-400/20"
          : "bg-gradient-to-br from-black/70 via-gray-900/70 to-green-900/40 hover:shadow-xl hover:shadow-green-400/10"
      } backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 ${
        isExpanded ? "transform scale-[1.02]" : "hover:transform hover:scale-[1.01]"
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
            ⭐ FEATURED
          </div>
        </div>
      )}

      {/* Main Card Content */}
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div>
              <div className="flex justify-center items-center h-24">
                <Image
                  src={casino.nameImage}
                  alt="Casino Logo"
                  width={400}
                  height={70}
                  className="flex object-center mx-auto"
                />
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center">
                  {renderStars(casino.rating)}
                  <span className="text-white/80 ml-6 text-sm">({casino.rating}/5)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Score Badge */}
          <div
            className={`px-3 py-1 rounded-full text-white text-sm font-bold ${getTrustBadgeColor(casino.trustScore)}`}
          >
            Trust: {casino.trustScore}/10
          </div>
        </div>

        {/* Key Information Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-black/30 rounded-lg p-3 border border-green-400/20">
            <div className="text-green-400 text-sm font-medium mb-1">Welcome Bonus</div>
            <div className="text-white font-bold">{casino.bonus}</div>
            {casino.freeSpins && <div className="text-green-300 text-sm">+ {casino.freeSpins} Free Spins</div>}
          </div>

          <div className="bg-black/30 rounded-lg p-3 border border-green-400/20">
            <div className="text-green-400 text-sm font-medium mb-1">Min Deposit</div>
            <div className="text-white font-bold">{casino.minDeposit}</div>
            <div className="text-gray-300 text-sm">Wagering: {casino.wagering}</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
            🏆 {casino.licenseCountry} Licensed
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-4">
          <Link
            href={casino.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
          >
            🎰 Play Now
          </Link>

          <button
            onClick={toggleExpanded}
            className="bg-gray-700/50 hover:bg-gray-600/50 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 border border-green-400/30 hover:border-green-400/50"
          >
            {isExpanded ? "▲ Less Info" : "▼ More Info"}
          </button>
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-green-400/20 pt-4 space-y-4">
            {/* Description */}
            <div>
              <h4 className="text-green-400 font-semibold mb-2">About {casino.name}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{casino.description}</p>
            </div>

            {/* Casino Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Casino Info */}
              <div className="bg-black/30 rounded-lg p-4 border border-green-400/20">
                <h5 className="text-green-400 font-medium mb-3">Casino Information</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Established:</span>
                    <span className="text-white">{casino.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Live Chat:</span>
                    <span className={casino.liveChatAvailable ? "text-green-400" : "text-red-400"}>
                      {casino.liveChatAvailable ? "✓ Available" : "✗ Not Available"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mobile:</span>
                    <span className={casino.mobileOptimized ? "text-green-400" : "text-red-400"}>
                      {casino.mobileOptimized ? "✓ Optimized" : "✗ Not Optimized"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">VIP Program:</span>
                    <span className={casino.vipProgram ? "text-green-400" : "text-red-400"}>
                      {casino.vipProgram ? "✓ Available" : "✗ Not Available"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-black/30 rounded-lg p-4 border border-green-400/20">
                <h5 className="text-green-400 font-medium mb-3">Key Features</h5>
                <div className="flex flex-wrap gap-2">
                  {casino.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs border border-green-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-black/30 rounded-lg p-4 border border-green-400/20">
              <h5 className="text-green-400 font-medium mb-3">Payment Methods</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {casino.paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 text-white text-center py-2 rounded border border-gray-600/50 text-xs"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Game Providers */}

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Restrictions */}
              <div className="bg-black/30 rounded-lg p-3 border border-green-400/20">
                <h6 className="text-red-400 text-sm font-medium mb-2">Restrictions</h6>
                <div className="space-y-1">
                  {casino.restrictions.map((restriction, index) => (
                    <div key={index} className="text-red-300 text-xs">
                      • {restriction}
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Link */}
              <div className="bg-black/30 rounded-lg p-3 border border-green-400/20">
                <h6 className="text-green-400 text-sm font-medium mb-2">Read Full Review</h6>
                <Link href={casino.reviewLink} className="text-green-300 hover:text-green-200 text-xs underline">
                  View Detailed Review →
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center pt-4">
              <Link
                href={casino.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
              >
                🎰 Start Playing at {casino.name} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;
