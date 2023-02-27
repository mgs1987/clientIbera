import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardActivities from "../CardActivities/CardActivities.js";
import Pages from "../../Pages";
import { Box } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar.js";
import { getActivities } from "../../Redux/actions/activities.js";

function LocalExperiences() {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <Box mt="30px">
        <SearchBar/>
      </Box>
      <br></br>
      {activities && activities.map((activitie) =>
      {return(
          <CardActivities
            name={activitie.name}
            description={activitie.description}
            image={activitie.image}
            price={activitie.price}
          />
      );
      })}
    </div>
  );
}


export default LocalExperiences;