import React from "react";
import "./Form.css";
import { Formik } from "formik";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

function Form() {
  const [result, setResult] = React.useState("");

  function getAddress(address, name, date) {
    const url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "ea73e6140b9125725640d3019f9f777cfd0d12a3";
    const query = address;
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const dataAddress = data.suggestions[0];
        console.log(dataAddress.data);
        setResult(
          dataAddress.data.country +
            "/" +
            dataAddress.data.region_iso_code +
            "/" +
            "VDV" +
            "/GLAT" +
            dataAddress.data.geo_lat +
            "-GLON" +
            dataAddress.data.geo_lon +
            "/" +
            date
        );
        console.log(result);
      })
      .catch((error) => {
        setResult("Ошибка");
        console.log("error", error);
      });
  }

  function daysInMonth(month, year) {
    let monthNum = new Date(Date.parse(month + " 1," + year)).getMonth() + 1;
    return new Date(year, monthNum, 0).getDate();
  }

  function reviewDate(date) {
    console.log(date);
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
    console.log(reverseDateMs - today);
    console.log(reverseDateMs);
    console.log(reverseDate[2]);
    if (reverseDateMs - today > 1209600000) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  return (
    <section className="form">
      <h2 className="form__title">Запись к врачу</h2>

      <Formik
        initialValues={{ name: "", age: "", address: "", date: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Это обязательное поле";
          } else if (
            !/^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/i.test(
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

          if (!values.address) {
            errors.address = "Это обязательное поле";
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
        onSubmit={(values) => {
          getAddress(values.address, values.name, values.date);
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
              token=""
              value={values.address}
              onBlur={handleBlur}
              inputProps={{
                name: "address",
                onBlur: handleBlur,
                onChange: handleChange,
                className: "fields__input",
              }}
            />
            {/* <input
              className={`fields__input ${
                errors.address && touched.address && errors.address
                  ? "fields__input-error"
                  : ""
              }`}
              type="text"
              placeholder="Адрес"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            ></input> */}
            <span className="fields__span-error">
              {errors.address && touched.address && errors.address
                ? errors.address && touched.address && errors.address
                : status
                ? status
                : ""}
            </span>
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
                (errors.address && touched.address && errors.address) ||
                (errors.date && touched.date && errors.date)
                  ? "fields__button_inactive"
                  : ""
              } ${
                touched.name && touched.age && touched.date && touched.address
                  ? ""
                  : "fields__button_inactive"
              }`}
              type="submit"
              disabled={`${
                (errors.name && touched.name && errors.name) ||
                (errors.age && touched.age && errors.age) ||
                (errors.address && touched.address && errors.address) ||
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
