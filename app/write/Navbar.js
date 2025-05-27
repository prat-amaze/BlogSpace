"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import {FaListUl,FaAlignRight,FaAlignCenter,FaCode,FaFont,FaTextHeight,FaBold,FaUnderline,FaItalic,FaStrikethrough,FaImage,FaAlignLeft,} from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { Rochester } from "next/font/google";
import { IoSend } from "react-icons/io5";

const rock = Rochester({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = ({ onButtonClick }) => {
  const [title, setTitle] = useState("");
  const [isTypeHovering, setIsTypeHovering] = useState(false);
  const [isSizeHovering, setIsSizeHovering] = useState(false);
  const [isBoldHovering, setIsBoldHovering] = useState(false);
  const [isColorHovering, setIsColorHovering] = useState(false);
  const [isItalicsHovering, setIsItalicsHovering] = useState(false);
  const [isUnderlineHovering, setIsUnderlineHovering] = useState(false);
  const [isStrikethroughHovering, setIsStrikethroughHovering] = useState(false);
  const [isImageHovering, setIsImageHovering] = useState(false);
  const [isEmojiHovering, setIsEmojiHovering] = useState(false);
  const [isAlignHovering, setIsAlignHovering] = useState(false);
  const [isCodeHovering, setIsCodeHovering] = useState(false);
  const [isBulletHovering, setIsBulletHovering] = useState(false);

  const [showFontOptions, setShowFontOptions] = useState(false);
  const [showFontSizes, setShowFontSizes] = useState(false);
  const [showAlignOptions, setShowAlignOptions] = useState(false);

  return (
    <nav className="bg-amber-100 sticky top-5 w-[60vw] mx-auto p-3 rounded-full">
        <div className="title w-full">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="pl-4 w-full focus:outline-none font-bold text-xl"
            placeholder="Title"
          />
          <div className="border border-amber-700 ml-4"></div>
        </div>
        <div className="tools flex justify-center mt-2 gap-1">
          <button
            onMouseEnter={() => setIsTypeHovering(true)}
            onMouseLeave={() => setIsTypeHovering(false)}
            onClick={() => setShowFontOptions(true)}
            className=" bg-amber-500 p-2 rounded-lg relative"
          >
            <FaFont className="w-4 h-4 cursor-pointer" />
            {isTypeHovering && (
              <div
                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20`}
              >
                Font-type
              </div>
            )}
            {/* Font Style Dropdown */}
            {showFontOptions && (
              <div
                className="absolute bg-white flex flex-col justify-center top-full left-1/2 -translate-x-1/2 rounded-lg shadow-md border"
                onMouseLeave={() => setShowFontOptions(false)}
              >
                <span
                  onClick={() => {
                    onButtonClick[1]("Arial");
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Arial
                </span>
                <span
                  onClick={() => {
                    onButtonClick[1]("Times New Roman");
                  }}
                  className="hover:bg-[#383f4270] m-1 font-times"
                >
                  Times
                </span>
                <span
                  onClick={() => {
                    onButtonClick[1]("Courier New");
                  }}
                  className="hover:bg-[#383f4270] m-1 font-courier"
                >
                  Courier
                </span>
                <span
                  onClick={() => {
                    onButtonClick[1]("Rochester");
                  }}
                  className={`${rock.className} hover:bg-[#383f4270] m-1`}
                >
                  Rochester
                </span>
              </div>
            )}
          </button>

          <button
            onMouseEnter={() => setIsSizeHovering(true)}
            onMouseLeave={() => setIsSizeHovering(false)}
            onClick={() => setShowFontSizes(true)}
            className=" bg-amber-500 p-2 rounded-lg relative"
          >
            <FaTextHeight className="w-4 h-4 cursor-pointer" />
            {isSizeHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20">
                Font-size
              </div>
            )}
            {/* Font Style Dropdown */}
            {showFontSizes && (
              <div
                className="absolute bg-white flex flex-col justify-center top-full left-1/2 -translate-x-1/2 rounded-lg shadow-md border"
                onMouseLeave={() => setShowFontSizes(false)}
              >
                <span
                  onClick={() => {
                    onButtonClick[2](1);
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Smallest
                </span>
                <span
                  onClick={() => {
                    onButtonClick[2](2);
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Small
                </span>
                <span
                  onClick={() => {
                    onButtonClick[2](3);
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Normal
                </span>
                <span
                  onClick={() => {
                    onButtonClick[2](4);
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Medium
                </span>
                <span
                  onClick={() => {
                    onButtonClick[2](5);
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Large
                </span>
                <span
                  onClick={() => {
                    onButtonClick[2](6);
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Larger
                </span>
                <span
                  onClick={() => {
                    onButtonClick[2](7);
                  }}
                  className="hover:bg-[#383f4270] m-1 font-arial"
                >
                  Largest
                </span>
              </div>
            )}
          </button>

          <div className="mx-2 text-2xl">|</div>

          <button
            onMouseEnter={() => setIsBoldHovering(true)}
            onMouseLeave={() => setIsBoldHovering(false)}
            onClick={() => onButtonClick[0]("bold")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaBold className="w-4 h-4 cursor-pointer" />
            {isBoldHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20">
                Bold
              </div>
            )}
          </button>

          <button
            onMouseEnter={() => setIsItalicsHovering(true)}
            onMouseLeave={() => setIsItalicsHovering(false)}
            onClick={() => onButtonClick[0]("italic")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaItalic className="w-4 h-4 cursor-pointer" />
            {isItalicsHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20">
                Italics
              </div>
            )}
          </button>

          <button
            onMouseEnter={() => setIsUnderlineHovering(true)}
            onMouseLeave={() => setIsUnderlineHovering(false)}
            onClick={() => onButtonClick[0]("underline")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaUnderline className="w-4 h-4 cursor-pointer" />
            {isUnderlineHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20">
                Underline
              </div>
            )}
          </button>

          <button
            onMouseEnter={() => setIsStrikethroughHovering(true)}
            onMouseLeave={() => setIsStrikethroughHovering(false)}
            onClick={() => onButtonClick[0]("strikethrough")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaStrikethrough className="w-4 h-4 cursor-pointer" />
            {isStrikethroughHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-24">
                Strikethrough
              </div>
            )}
          </button>

          <button
            onMouseEnter={() => setIsColorHovering(true)}
            onMouseLeave={() => setIsColorHovering(false)}
            onClick={() => onButtonClick[0]("color")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaFont className="w-4 h-4 cursor-pointer text-blue-600" />
            {isColorHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20">
                Font-Color
              </div>
            )}
          </button>

          <div className="mx-2 text-2xl">|</div>

          <button
            onMouseEnter={() => setIsImageHovering(true)}
            onMouseLeave={() => setIsImageHovering(false)}
            onClick={() => onButtonClick[0]("image")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaImage className="w-4 h-4 cursor-pointer" />
            {isImageHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-24">
                Insert Image
              </div>
            )}
          </button>

          <span
            onMouseEnter={() => setIsEmojiHovering(true)}
            onMouseLeave={() => setIsEmojiHovering(false)}
            className="p-2 rounded-lg relative hover:bg-amber-200 cursor-pointer"
            onClick={() => onButtonClick[0]("emoji")}
          >
            <BsEmojiSmile className="w-4 h-4" />
            {isEmojiHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-24">
                Insert Emoji
              </div>
            )}
          </span>

          <button
            onMouseEnter={() => setIsAlignHovering(true)}
            onMouseLeave={() => setIsAlignHovering(false)}
            onClick={() => setShowAlignOptions(true)}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaAlignLeft className="w-4 h-4 cursor-pointer" />
            {isAlignHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-24">
                Align Text
              </div>
            )}

            {showAlignOptions && (
              <div
                className="absolute mt-2 z-10 bg-white left-1/2 -translate-x-1/2 rounded-lg shadow-md border w-36 flex flex-col py-1 animate-fade-in"
                onMouseLeave={() => setShowAlignOptions(false)}
              >
                <div
                  onClick={() => {
                    onButtonClick[0]("justifyLeft");
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  <FaAlignLeft className="w-4 h-4" /> Left
                </div>
                <div
                  onClick={() => {
                    onButtonClick[0]("justifyCenter");
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  <FaAlignCenter className="w-4 h-4" /> Center
                </div>
                <div
                  onClick={() => {
                    onButtonClick[0]("justifyRight");
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  <FaAlignRight className="w-4 h-4" /> Right
                </div>
              </div>
            )}
          </button>

          <button
            onMouseEnter={() => setIsCodeHovering(true)}
            onMouseLeave={() => setIsCodeHovering(false)}
            onClick={() => onButtonClick[0]("code")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaCode className="w-4 h-4 cursor-pointer" />
            {isCodeHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20">
                Code Block
              </div>
            )}
          </button>

          <button
            onMouseEnter={() => setIsBulletHovering(true)}
            onMouseLeave={() => setIsBulletHovering(false)}
            onClick={() => onButtonClick[0]("bullet")}
            className="p-2 rounded-lg relative hover:bg-amber-200"
          >
            <FaListUl className="w-4 h-4 cursor-pointer" />
            {isBulletHovering && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow w-20">
                Bullet List
              </div>
            )}
          </button>
        </div>

        <div className="absolute z-60 rounded-full bg-amber-400 p-4 top-0 right-0 cursor-pointer"
            onClick={()=> {if(title !== "") onButtonClick[3](title)}}>
            <IoSend className="w-12 h-12"/>
            Publish
        </div>
    </nav>
  );
};

export default Navbar;
