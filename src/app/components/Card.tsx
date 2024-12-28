import Image from 'next/image'
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

interface Ipost {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
}

export default function Card(props: { post: Ipost }) {
  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="w-[230px] h-[400px] bg-amber-600 rounded-md shadow-lg p-4 transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-4">
          <Image src={props.post.image} alt="Book Cover" width={100} height={100} />
        </div>
        <h1 className="text-amber-200 text-lg font-semibold text-center mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {props.post.title}
        </h1>
        <p className="text-stone-700 text-sm text-center mb-1 overflow-hidden text-ellipsis line-clamp-3">
          {props.post.excerpt}
        </p>
        <div className="flex justify-center mb-0">
          <Image src="/star-removebg-preview.png" alt="Star Rating" width={100} height={100} />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button className="font-semibold text-xl text-amber-200 hover:underline">
            Read More
          </button>
          <FaArrowAltCircleRight className="text-2xl text-amber-200" />
        </div>
      </div>
    </div>
  );
}