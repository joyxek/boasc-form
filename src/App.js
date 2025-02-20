import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [values, setValues] = useState({
    firstname: '',
    dates: ''
  })

  const [modal, setModal] = useState(false)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    console.log(modal)
    setModal(true)
    console.log('modal after setModal: ', modal)
  }

  const ResetFunc = () => {
    console.log('this is happening')
    console.log('here are the values: ', values)
    setValues({ firstname: '', dates: '' })
    console.log('technically')
    console.log(values)
  }
  return (
    <div className="container">
      <h1>Based on a Second Chance: Date Two 👀</h1>
      {!modal &&
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="Enter First Name" name="firstname"
            onChange={(e) => handleChange(e)} required value={values.firstname} />

          <label htmlFor="dates">Possible Dates</label>

          <div>Option 1</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>


          <div>Option 2</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <div>Option 3</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <div>Option 4</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <div>Option 5</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <div>Option 6</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <div>Option 7</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <div>Option 8</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <div>Option 9</div>
          <select name="dates" id="dates" onChange={(e) => handleChange(e)} required value={values.dates}>
            <option value="-">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>

          <button type="button" onClick={ResetFunc}>Reset</button>
          <button type="submit">Submit</button>


        </form>
      }



      {modal &&
        <div >
          <h1>Thank you {values.firstname}! See you next week!</h1>
        </div>
      }

      <h3>Just remember that these will be taken into consideration when determining 1:1 speed date orders for next week!</h3>

    </div>
  );
}

export default App;
