import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const BackButton = () => {
    return (
        <Link to="/">
            <Button>Back to Main Menu</Button>
        </Link>
    );
}

export default BackButton;