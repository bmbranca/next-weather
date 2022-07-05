import React, { useEffect } from "react";
import { Header, WeatherBanner, Container, Form } from "./styled";

export default function Home() {
  const [weather, setWeather] = React.useState('')

  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=lisle&appid=1252fa4b4c43bbeb8d83c3de478b9d1d"
    )
      .then((res) => res.json())
      .then((data) => setWeather(<h1>{data[0].name}</h1>))
  }, [])

  return (
    <Container>
      <Header>Next Weather App</Header>
      <Form>
        <label>
          <input type="text" name="name" />
        </label>
        <button>Click</button>
      </Form>
      <WeatherBanner>{weather}</WeatherBanner>
    </Container>
  );
}
