import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchDadJoke} from "../redux/dadJokeSlice";
import {Container, Row, Col, Button} from "reactstrap";
import SubHeader from "../components/SubHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/Error";
import BackButton from "../components/BackButton";

const DadJokePage = () => {
    const dispatch = useDispatch();
    const {joke, isLoading, errMsg} = useSelector((state) => state.dadJoke);

    //First Render
        useEffect(() => {
            dispatch(fetchDadJoke());
        }, [dispatch]);

    //Handle button click to fetch new joke
        const handleNewJoke = () => {
            dispatch(fetchDadJoke());
        };

    return (
        <Container>
            <SubHeader current="a Dad Joke" />
            
            <Row>
                <Col>
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : errMsg ? (
                        <Error errMsg={errMsg} />
                    ) : (
                        <p>{joke.joke}</p>
                    )}
                </Col>
            </Row>

            <Row>
                <Col>
                    <BackButton />
                </Col>

                <Col>
                    <Button onClick={handleNewJoke} disabled={isLoading}>{isLoading ? "Getting a new Joke.." : "Tell me a new Joke"}</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DadJokePage;