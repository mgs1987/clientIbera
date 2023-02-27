import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardActivities from "../CardActivities/CardActivities.js";
import { Box } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar.js";
import { getServices } from "../../Redux/actions/services";

function LocalExperiences() {
    const dispatch = useDispatch();

    const activities = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    console.log(activities);

    if (activities.length > 1) {

        return (
            <div>
                <Box mt="30px">
                    <SearchBar />
                </Box>
                <br></br>
                {activities.length > 1 && activities.map((activitie) => {
                    return (
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

    } else {

        return (

            <div>hola</div>

        )

    };

};


export default LocalExperiences;