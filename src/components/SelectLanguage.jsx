import { useState } from "react";
import Select from "react-select";
import ru from "../assets/images/flags/ru.png";
import en from "../assets/images/flags/en.png";
import uk from "../assets/images/flags/uk.png";
import pl from "../assets/images/flags/pl.png";
import es from "../assets/images/flags/es.png";
import fr from "../assets/images/flags/fr.png";
import de from "../assets/images/flags/de.png";
import it from "../assets/images/flags/it.png";
import ja from "../assets/images/flags/ja.png";
import pt from "../assets/images/flags/pt.png";

function SelectLanguage() {
  const [language, setLanguage] = useState("ru");

  const options = [
    { label: "RU", value: "ru", icon: ru },
    { label: "EN", value: "en", icon: en },
    { label: "UK", value: "uk", icon: uk },
    { label: "PL", value: "pl", icon: pl },
    { label: "ES", value: "es", icon: es },
    { label: "FR", value: "fr", icon: fr },
    { label: "DE", value: "de", icon: de },
    { label: "IT", value: "it", icon: it },
    { label: "JA", value: "ja", icon: ja },
    { label: "PT", value: "pt", icon: pt },
  ];

  const changeLanguage = (selectedOption) => {
    console.log(selectedOption.value);
    setLanguage(selectedOption.value);
  };

  return (
    <Select
      className="select-language"
      onChange={changeLanguage}
      defaultValue={options[0]}
      options={options}
      isSearchable={false}
      formatOptionLabel={({ label, icon }) => (
        <div className="select-language__option">
          <img src={icon} alt={label} />
          {label}
        </div>
      )}
    />
  );
}

export default SelectLanguage;
