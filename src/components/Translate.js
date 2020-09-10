import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

const languageOptions = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Bengali",
    value: "bn",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Malayalam",
    value: "ml",
  },
];

const translateURL = "https://translation.googleapis.com/language/translate/v2";

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [inputState, setInputState] = useState("");

  useEffect(() => {
    const timerID = setTimeout(() => setDebouncedTerm(text), 1000);
    return () => clearTimeout(timerID);
  }, [text]);

  useEffect(() => {
    if (debouncedTerm.length && selectedLanguage.value !== "en") {
      const translate = async () => {
        setInputState("loading");
        const { data } = await axios.post(
          translateURL,
          {},
          {
            params: {
              q: debouncedTerm,
              target: selectedLanguage.value,
              key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },
          }
        );
        setInputState("category");
        setTranslatedText(data.data.translations[0].translatedText);
      };
      translate();
    } else setTranslatedText(debouncedTerm);
  }, [debouncedTerm, selectedLanguage]);

  return (
    <div className="ui grid">
      <div className="row">
        <SearchBar
          placeHolder="Translate..."
          setTerm={setText}
          inputState={inputState}
          term={text}
        />
      </div>
      <div className="row">
        <div className="five wide column">
          <Dropdown
            placeHolder="Choose language"
            selected={selectedLanguage}
            options={languageOptions}
            onSelectedChange={(option) => setSelectedLanguage(option)}
          />
        </div>
      </div>
      <div className="six wide column">
        <h3 className="ui header">Translated text is {translatedText}</h3>
      </div>
    </div>
  );
};

export default Translate;
