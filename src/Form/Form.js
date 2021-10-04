import React from "react";
import "./Form.css";
import { Formik } from "formik";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

function Form() {
  const [result, setResult] = React.useState("");
  const [address, setAddress] = React.useState({});

  function transliterate(word) {
    const a = {
      Ё: "YO",
      Й: "I",
      Ц: "TS",
      У: "U",
      К: "K",
      Е: "E",
      Н: "N",
      Г: "G",
      Ш: "SH",
      Щ: "SCH",
      З: "Z",
      Х: "H",
      Ъ: "'",
      ё: "yo",
      й: "i",
      ц: "ts",
      у: "u",
      к: "k",
      е: "e",
      н: "n",
      г: "g",
      ш: "sh",
      щ: "sch",
      з: "z",
      х: "h",
      ъ: "'",
      Ф: "F",
      Ы: "I",
      В: "V",
      А: "a",
      П: "P",
      Р: "R",
      О: "O",
      Л: "L",
      Д: "D",
      Ж: "ZH",
      Э: "E",
      ф: "f",
      ы: "i",
      в: "v",
      а: "a",
      п: "p",
      р: "r",
      о: "o",
      л: "l",
      д: "d",
      ж: "zh",
      э: "e",
      Я: "Ya",
      Ч: "CH",
      С: "S",
      М: "M",
      И: "I",
      Т: "T",
      Ь: "'",
      Б: "B",
      Ю: "YU",
      я: "ya",
      ч: "ch",
      с: "s",
      м: "m",
      и: "i",
      т: "t",
      ь: "'",
      б: "b",
      ю: "yu",
    };
    return word
      .split("")
      .map(function (char) {
        return a[char] || char;
      })
      .join("");
  }

  function getAddress(name, date) {
    const nameArray = name.split(" ");
    let totalName = "";
    const changedDate = date.split(".").reverse().join("-");
    if (address) {
      nameArray.forEach((word) => {
        totalName += word.substring(0, 1).toLocaleUpperCase();
      });
      transliterate(totalName);
      setResult(
        address.data.country +
          "/" +
          address.data.region_iso_code +
          "/" +
          transliterate(totalName).toLocaleUpperCase() +
          "/GLAT" +
          (address.data.geo_lat ? address.data.geo_lat : "") +
          "-GLON" +
          (address.data.geo_lon ? address.data.geo_lon : "") +
          "/" +
          changedDate
      );
    } else {
      setResult("Ошибка");
    }
  }

  function reviewDate(date) {
    const today = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate()
    ).getTime();
    const reverseDate = date.split(".").reverse();
    const reverseDateMs = new Date(
      reverseDate[0],
      reverseDate[1],
      reverseDate[2]
    ).getTime();
    if (reverseDateMs - today > 1209600000 || reverseDateMs - today < 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className="form">
      <h2 className="form__title">Запись к врачу</h2>

      <Formik
        initialValues={{ name: "", age: "", date: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Это обязательное поле";
          } else if (
            !/^[А-ЯЁA-Z][а-яёa-z]*([-][А-ЯЁA-Z][а-яёa-z]*)?\s[А-ЯЁA-Z][а-яёa-z]*\s[А-ЯЁA-Z][а-яёa-z]*$/i.test(
              values.name
            )
          ) {
            errors.name = "Неверно введены фио";
          }

          if (!values.age) {
            errors.age = "Это обязательное поле";
          } else if (values.age > 150 || values.age < 0) {
            errors.age = "Допустимый возраст от 0 до 150";
          }

          if (!values.date) {
            errors.date = "Это обязательное поле";
          } else if (
            !/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(
              values.date
            )
          ) {
            errors.date = "Введите дату в верном формате, например 01.01.2000";
          } else if (reviewDate(values.date)) {
            errors.date = "Нельзя указать дату позднее 14 дней с текущего дня";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          getAddress(values.name, values.date);
          resetForm(values);
          setAddress("");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          status,
        }) => (
          <form className="fields" onSubmit={handleSubmit}>
            <p className="fields__title">ФИО</p>
            <input
              className={`fields__input ${
                errors.name && touched.name && errors.name
                  ? "fields__input-error"
                  : ""
              }`}
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></input>
            <span className="fields__span-error">
              {errors.name && touched.name && errors.name}
            </span>
            <p className="fields__title">Возраст</p>
            <input
              className={`fields__input ${
                errors.age && touched.age && errors.age
                  ? "fields__input-error"
                  : ""
              }`}
              type="number"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
            ></input>
            <span className="fields__span-error">
              {errors.age && touched.age && errors.age}
            </span>
            <p className="fields__title">Адрес</p>
            <AddressSuggestions
              token="ea73e6140b9125725640d3019f9f777cfd0d12a3"
              count="5"
              hintText="Выберите нужный адрес"
              selectOnBlur="true"
              value={address}
              onChange={setAddress}
              inputProps={{
                className: "fields__input",
              }}
            />

            <p className="fields__title">Дата записи</p>
            <input
              className={`fields__input ${
                errors.date && touched.date && errors.date
                  ? "fields__input-error"
                  : ""
              }`}
              type="text"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            ></input>
            <span className="fields__span-error">
              {errors.date && touched.date && errors.date
                ? errors.date && touched.date && errors.date
                : status
                ? status
                : ""}
            </span>
            <button
              className={`fields__button  ${
                (errors.name && touched.name && errors.name) ||
                (errors.age && touched.age && errors.age) ||
                (errors.date && touched.date && errors.date)
                  ? "fields__button_inactive"
                  : ""
              } ${
                touched.name && touched.age && touched.date
                  ? ""
                  : "fields__button_inactive"
              }`}
              type="submit"
              disabled={`${
                (errors.name && touched.name && errors.name) ||
                (errors.age && touched.age && errors.age) ||
                (errors.date && touched.date && errors.date)
                  ? "disabled"
                  : ""
              }`}
            >
              Отправить
            </button>
          </form>
        )}
      </Formik>
      <p className="result">{result}</p>
    </section>
  );
}

export default Form;
