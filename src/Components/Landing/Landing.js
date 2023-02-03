import { Link } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react';
import "./Landing.css";

function LandingPage(props) {
    return (

        <section className="hero">

            <nav>

                <div className="logo"></div>

                <div className="nav-link">

                    <ul>
                        <Link to={"/home"}>
                            <ButtonGroup variant='outline' spacing='6'>
                                <Button color="yellow" _hover={{
                                    transform: 'scale(1.15)',
                                }}>Home</Button>
                            </ButtonGroup>
                        </Link>
                    </ul>

                </div>

            </nav>

            <div className="content">
                <h1>Enjoy your vacation with <br />resort network <span>Ibera</span></h1>
            </div>

        </section>

    )
};

export default LandingPage;

//