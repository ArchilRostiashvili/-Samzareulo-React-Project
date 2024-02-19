import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPageSlider from "./main-page-components/main-slider";
import ChefChoice from "./main-page-components/main-chef-choice";
import { useState } from "react";
import { useEffect } from "react";
import { getAllDishes } from "../services/dish-service";

function Main() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllDishes();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="content">
        <MainPageSlider data={data} header="Trending Recently"></MainPageSlider>
        <ChefChoice data={data}></ChefChoice>
        <MainPageSlider data={data} header={"You May Like"}></MainPageSlider>
      </div>
    </>
  );
}

export default Main;
