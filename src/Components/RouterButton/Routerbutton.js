import React, {Component} from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const CollisionLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/inGame" {...props} />
));

class SubmitButton extends Component {


    playerJoin(name, gameCode) {
        let resp = client.playerJoin(name, gameCode);
        console.log(resp.status);
        CollisionLink;
    }

    SubmitButton() {
        return (
                <Button onClick={this.playerJoin()}>Avoids props collision</Button>
        );
    }

}


export default SubmitButton;