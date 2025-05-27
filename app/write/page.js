"use client";
import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import { Rochester } from "next/font/google";
import EmojiPicker from "emoji-picker-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from "next/navigation";

const geist = Rochester({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const editorRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);

  function insertBulletList() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const container = range.cloneContents();

    const lines = [];
    container.childNodes.forEach((node) => {
      const text = node.textContent.trim();
      if (text) {
        lines.push("• " + text);
      }
    });

    // Clear selected content
    range.deleteContents();

    // Insert bullet lines with <br> between them
    lines.forEach((line, index) => {
      const textNode = document.createTextNode(line);
      range.insertNode(textNode);
      range.setStartAfter(textNode);
      if (index !== lines.length - 1) {
        const br = document.createElement("br");
        range.insertNode(br);
        range.setStartAfter(br);
      }
    });

    // Move cursor to the end
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.setStart(range.endContainer, range.endOffset);
    newRange.collapse(true);
    selection.addRange(newRange);
  }

  const handleButtonClick = (type) => {
    console.log("Button clicked:", type);

    if (type === "bold") {
      document.execCommand("bold");
    } else if (type === "italic") {
      document.execCommand("italic");
    } else if (type === "underline") {
      document.execCommand("underline");
    } else if (type === "strikethrough") {
      document.execCommand("strikeThrough");
    } else if (type === "emoji") {
      setShowEmojis(true);
    } else if (type === "image") {
      const url = prompt("Enter image URL:");
      if (url) {
        const img = document.createElement("img");
        img.src = url;
        img.style.width = "50vw";
        img.style.height = "auto";
        img.style.resize = "both";
        img.style.overflow = "auto";
        img.style.display = "block";
        img.contentEditable = false;

        const editor = document.getElementById("editor");
        editor.appendChild(img);
      }
    } else if (type === "color") {
      const code = prompt("Enter Hex code:");
      if (code) {
        document.execCommand("foreColor", false, code);
      }
    } else if (type === "justifyLeft") {
      document.execCommand("justifyLeft");
    } else if (type === "justifyCenter") {
      document.execCommand("justifyCenter");
    } else if (type === "justifyRight") {
      document.execCommand("justifyRight");
    } else if (type === "justifyFull") {
      document.execCommand("justifyFull");
    } else if (type === "code") {
      const codeHTML = `
        <pre contenteditable="false" style="
            background-color: #1e1e1e;
            color: #d4d4d4;
            font-family: 'Fira Code', monospace;
            padding: 12px 16px;
            border-radius: 8px;
            overflow-x: auto;
            white-space: pre;
            margin: 1rem 0;
        ">
        <code contenteditable="true" style="
            display: block;
            white-space: pre;
        ">
        console.log("Hello, world!");
        </code>
        </pre><br/>
        `;

      document.execCommand("insertHTML", false, codeHTML);
    }else if (type === "bullet") {
      editorRef.current.focus();
      insertBulletList()
    }
  };

  const changeFont = (fontFamily) => {
    console.log(fontFamily);
    document.execCommand("fontName", false, fontFamily);
  };

  const changeSize = (fontSize) => {
    console.log(fontSize);
    document.execCommand("fontSize", false, fontSize);
  };

  const insertTextAtCursor = (text) => {
    const sel = window.getSelection();
    if (sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(text));
    }
  };

  const handleSave = async (title) => {
    const content = document.getElementById("editor").innerHTML;

    await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, html: content }),
    });
    toast("Successfully Published")
    redirect("/all")
  };

  return (
    <>
      <Navbar
        onButtonClick={[handleButtonClick, changeFont, changeSize, handleSave]}
      />

      {showEmojis && (
        <div className="absolute z-50 mt-4 left-1/2 -translate-x-1/2">
          <EmojiPicker
            onEmojiClick={(emoji) => {
              insertTextAtCursor(emoji.emoji);
              setShowEmojis(false);
            }}
          />
        </div>
      )}

      <div
        ref={editorRef}
        contentEditable
        className="border p-4 m-4 mt-10 rounded w-[50vw] mx-auto h-fit min-h-[842px]"
        style={{ outline: "none" }}
        id="editor"
      ></div>
      <ToastContainer />
    </>
  );
};

export default Page;
