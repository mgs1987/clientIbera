import React from 'react'
import { Input, Flex, Select } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "../../Redux/actions/hotels";
import CardHotel from '../CardHotel/CardHotel';
import { Link } from 'react-router-dom';




function SearchBar() {

  const dataApi = [{ id: "0", stars: "4", name: "Hotel Ibera Pilar", city: "Buenos Aires, Pilar", img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/158648688.jpg?k=06fc0b28c9fcf97df6a6fd766b9e340f7e87dbc2236bafb5367ed6d8a202eab4&o=&hp=1" },
  { id: "1", stars: "4", name: "Hotel Ibera Cordoba", city: "Cordoba, Capital", img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/36/37/363786_v3.jpeg" },
  { id: "2", stars: "4.5", name: "Hotel Ibera Santa Fe", city: "Santa Fe, Rosario", img: "https://www.diarioinclusion.com/wp-content/uploads/hotel-hilton.jpg" },
  { id: "3", stars: "3.5", name: "Hotel Ibera Mendoza", city: "Mendoza, San rafael", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/327385690.jpg?k=2fc987f508ecf81d2669320ee879d4deb322f551af9bc1d7e063ae125b51c442&o=&hp=1" },
  { id: "4", stars: "5", name: "Hotel Ibera Rio Negro", city: "Rio Negro, Bariloche", img: "http://inmobiliare.com/himalaya/wp-content/uploads/2019/05/Hilton-apertura-sector-hotelero-en-m%C3%A9xico-planes-de-desarrollo-inmobiliare_2.jpg" },
  { id: "5", stars: "4", name: "Hotel Ibera Mar del Plata", city: "Buenos Aires, Mar del Plata", img: "https://www.tangol.com/Fotos/Hospedaje/20121025.SheratonMardelPlata(1).upd.jpg" },
  { id: "6", stars: "4.5", name: "Hotel Ibera Carilo", city: "Buenos Aires, Carilo", img: "https://s3.amazonaws.com/mean.machine-dev/1663865748046_image%20-%202022-09-22T135544.405.jpg" },
  { id: "7", stars: "5", name: "Hotel Ibera Ushuaia", city: "Tierra del fuego, Ushuaia", img: "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-03/hotel-leon-city-express-fachada-noche.jpg" },
  { id: "8", stars: "3.5", name: "Hotel Ibera Chubut", city: "Chubut, Rawson", img: "https://media-cdn.tripadvisor.com/media/photo-s/25/fb/8c/46/hotel-exterior.jpg" },
  { id: "9", stars: "4", name: "Hotel Ibera La Pama", city: "La Pama, Ciudad de Santa Rosa", img: "https://www.cronista.com/files/image/307/307126/5ffe2f4705222.jpg" },
  { id: "10", stars: "4.5", name: "Hotel Ibera Misiones", city: "Misiones, Posadas", img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" },
  { id: "11", stars: "5", name: "Hotel Ibera Entre Rios", city: "Entre Rios, Parana", img: "Entre Rios, Paraná", img: "https://img.nh-hotels.net/vJEy/PVOD8/original/SP_NH_gran-hotel-provincial_026_571x283-120_0.jpg?output-quality=80&resize=1600:*&background-color=white" }];

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getAllHotels());

  }, [dispatch]);

  /*useEffect(() => {
    if (allHotels && allHotels.length) {
      setItems([...allHotels]);
    }
  }, [allHotels]);*/

  const allHotels = useSelector((state) => state?.allHotels);

  console.log(allHotels);

  const [items, setItems] = useState([...dataApi]);

  const handleSearchName = (e) => {

    setItems([...dataApi].filter((hotel) => {
      return hotel.city.toLowerCase().includes(e.target.value.toLowerCase())
    }));

    console.log(items);

  };

  return (

    <div>

      <Input mt="50px"
        placeholder='Destination'
        size='md'
        variant="outline"
        width="1000px"

        onChange={handleSearchName}

      />

      <Flex
        align="center"
        justify="space-between"
      >

      </Flex>

      <div>

        <br></br>

      </div>

      {

        items && items.map((hotel) => {


          return (

            <Link to={"/cardDetail/" + hotel.id}>
              <CardHotel img={hotel.img} name={hotel.name}
                city={hotel.city} stars={hotel.stars} />
            </Link>

          )

        })

      }

    </div>

  )

};


export default SearchBar