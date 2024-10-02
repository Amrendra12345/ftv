
import { Form } from 'react-bootstrap';


const Widget_v = (props) => {
  

  return (
    <div className="widget_750 widgetform">
      <h4>
        Fly Anywhere.
        <br />
        Get an eVisa
      </h4>
      <form>
        <div className="ftv-field">
          <div className="citizenField">
            
            <Form.Label htmlFor="input1">I am a citizen of</Form.Label>
            <Form.Control
              type="text"
              value={""}
              placeholder="Select.."             
            />
          </div>
        </div>
        <div className="ftv-field">
          <div className="citizenField">
            <Form.Label htmlFor="input2">Planning to visit</Form.Label>
            <Form.Control
              placeholder={''}
              type="text"
              value={""}
             
            />
           
          </div>
        </div>

        <button type="button" className="btn btn-lg btn2" >
          Get an eVisa
        </button>
      </form>
    </div>
  );
};

export default Widget_v;
