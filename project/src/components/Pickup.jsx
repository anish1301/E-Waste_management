import { Div } from "./Container";
import { Link } from 'react-router-dom'
import '../css/pickup.css'
const Pickup = () => {
    return <>
        <Div>
            <Link id="Link" to="/page5">
                <img src="Images/backarrow1.svg" alt="" id="arrow" />
            </Link>

            <br />
            <img src="Images/pickupimg.png" alt="" id="pickimg" />
            <div id="pick-statement">
                We will be coming for your scrap pick up
            </div>

            <div id="pick-btn">
                Pickup details
            </div>

        </Div>

    </>
}

export default Pickup