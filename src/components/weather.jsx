import sun from "../img/01.svg";
import partlyCloudy from "../img/02.svg";
import cloudy from "../img/03.svg";
import broken from "../img/04.svg";
import shower from "../img/09.svg";
import rainy from "../img/10.svg";
import thunderStorm from "../img/11.svg";
import snow from "../img/13.svg";
import mist from "../img/50.svg";

function Weather(props) {
  if (props.icon === "01") {
    return (
      <div>
        <iframe src={sun} title="sun" />
        <p className="weather">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "02") {
    return (
      <div>
        <iframe src={partlyCloudy} title="partlyCloudy" />
        <p className="weather ">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "03") {
    return (
      <div>
        <iframe src={cloudy} title="cloudy" />
        <p className="weather">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "04") {
    return (
      <div>
        <iframe src={broken} title="broken" />
        <p className="weather">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "09") {
    return (
      <div>
        <iframe src={shower} title="shower" />
        <p className="rainy">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "10") {
    return (
      <div>
        <iframe src={rainy} title="rainy" />
        <p className="rainy">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "11") {
    return (
      <div>
        <iframe src={thunderStorm} title="thunderStorm" />
        <p className="rainy">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "13") {
    return (
      <div>
        <iframe src={snow} title="snow" />
        <p className="weather">{props.desc}</p>
      </div>
    );
  } else if (props.icon === "50") {
    return (
      <div>
        <iframe src={mist} title="mist" />
        <p className="weather">{props.desc}</p>
      </div>
    );
  }
}
export default Weather;
