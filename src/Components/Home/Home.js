import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";

const { getAllHotels } = allActions;

function Home() {
  const dispatch = useDispatch();

  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  console.log(hotels);

  return (
  <div>Hola lola </div>
)}

export default Home;
