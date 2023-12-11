"use client";
import React, { FormEvent, useState } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostName = parsedURL.hostname;

    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon.") ||
      hostName.endsWith("amazon")
    ) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
};

const SearchBar = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);
    if (!isValidLink) {
      return alert("Please provide a valid Amazon Product URL");
    }
    try {
      setLoading(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const [searchPrompt, setsearchPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter text here"
        value={searchPrompt}
        onChange={(e) => {
          setsearchPrompt(e.target.value);
        }}
        className="searchbar-input"
      ></input>
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
