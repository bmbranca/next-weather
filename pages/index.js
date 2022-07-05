import { useEffect } from "react";
import { Header, WeatherBanner, Container, Form } from "./styled";

let weather = function getData() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=lisle&appid=1252fa4b4c43bbeb8d83c3de478b9d1d')
    .then(res => res.json())
    .then(data => console.log(data[0].name))
}

weather()



export default function Home() {
  return (
    <Container>
      <Header>Next Weather App</Header>
      <Form>
        <label>
          <input type="text" name="name" />
        </label>
        < button>Click</button>
      </Form>
      <WeatherBanner></WeatherBanner>
    </Container>
  );
}
