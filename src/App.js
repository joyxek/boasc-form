import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {


  const [values, setValues] = useState({
    firstname: '',
    dates: []
  })

  // HI PAGE
  const [nameModal, setNameModal] = useState(false)

  // INSTRUCTION PAGE
  const [instructionModal, setInstructionModal] = useState(false)

  // DATE ORDER PAGE
  const [orderModal, setOrderModal] = useState(false)

  // SUBMITTED MODAL
  const [submitModal, setSubmitModal] = useState(false)

  // ERROR MODAL MSG - DUPLICATES
  const [errorModal, setErrorModal] = useState(false)

  // ERROR MODAL MSG - PLEASE MAKE ALL SELECTIONS
  const [errorModalTwo, setErrorModalTwo] = useState(false)

  // Modal controls
  const closeHiOpenInstruction = () => {
    setNameModal(true)
    setInstructionModal(true)
  }

  const closeInstructionOpenHi = () => {
    setNameModal(false)
    setInstructionModal(false)
  }

  const closeInstructionOpenOrder = () => {
    setInstructionModal(false)
    setOrderModal(true)
  }

  const closeOrderOpenInstruction = () => {
    setOrderModal(false)
    setInstructionModal(true)
  }


  // Submit button controls
  const handleNameSubmit = (e) => {
    e.preventDefault()
    setValues({ firstname: e.target.name })
    console.log(values.firstname)
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    // check to see that no numbers are duplicated
    console.log(values.dates);
    if (new Set(values.dates).size !== values.dates.length) {
      if (setErrorModalTwo) {
        setErrorModalTwo(false)
      }
      console.log('there are duplicates')
      setErrorModal(true)
    } else if (values.dates.length < 9) { // should I have it add how many times we've gone through the array, some sort of tracker is necessary
      setErrorModalTwo(true)
    } // there's an error in this else statement because it's adding to the array and not resetting after the error message. So maybe if the error message comes up, remove the last couple of values from the array?
    else {
      setErrorModal(false)
      setErrorModalTwo(false)
      console.log('there are no duplicates')

    }
    setOrderModal(false)
    setSubmitModal(true)
  }

  // hm do we need this
  const handleChange = (e) => {
    e.preventDefault()
    setValues({ ...values, [e.target.name]: [e.target.value] })
    console.log(values)
  }

  // We need to handle this to make sure that people don't submit duplicates
  const handleOrderChange = (e) => {
    e.preventDefault()
    setValues(prevValues => ({
      ...prevValues,
      dates: [...prevValues.dates, e.target.value]
    }))
    //this is printing 8 values when I need 9
    console.log('post setValues: ', values.dates)
  }

  return (
    <>
      {/* This will be replaced with logo to appear with every modal*/}
      <div className="container">
        <h1>Based on a Second Chance: Date Two 👀</h1>
      </div>

      {/* Page 1 of 4 page sequence on this form */}
      {/* Collect participants name */}
      {nameModal &&
        <div>
          <h3>Hi, </h3>
          <form onSubmit={handleNameSubmit}>
            <input type="text" placeholder="your first name" name="firstname"
              onChange={(e) => handleChange(e)} value={values.firstname} required /> {/* Not sure why the required button isn't going through*/}
            <button type='submit' onClick={closeHiOpenInstruction}>heart</button>
          </form>
        </div>
      }

      {/* Upon submitting name, trigger page 2 of 4 page sequence */}
      {instructionModal && <>
        < div >
          <h3>{values.firstname}, next week you'll be on nine 1:1 speed dates</h3>
          <h3>As you move through those 1:1 dates the duration will gradually grow shorter. </h3>
          <h3>For example, date one will start at 15 minutes and date nine will be 4 minutes.</h3>
          <h3>Based on your group dates today, we would love your input so next week can be more catered towards your interests. </h3>
          {/* Clicking this button will change state and initiate page 3 of 4 */}
          <button onClick={closeInstructionOpenHi}>Back</button>
          <button onClick={closeInstructionOpenOrder}> Next </button>
        </div >
      </>
      }

      {/* Choosing your speed date order */}
      {
        !orderModal && <>
          <h3>We can't guarantee that this will be your order next week, we will definitely take it into consideration.</h3>
          <h3>Please select in order from 1-9 your preferred 1:1 date order</h3>
          <form onSubmit={handleOrderSubmit}>
            <label htmlFor="dates">Possible Dates</label>


            <div>Option 1</div>
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" onChange={(e) => handleOrderChange(e)} required >
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

            <button type="submit">Submit</button>


          </form>
          {errorModal &&
            <div>
              <h1>Oops! Seems like there's a duplicate @@</h1>
            </div>}

          {errorModalTwo &&
            <div>
              <h1>Oops! You haven't made all your selections! </h1>
            </div>}
          <button onClick={closeOrderOpenInstruction}>Back</button>
        </>
      }

      {
        submitModal &&
        <div >
          <h1>Thank you {values.firstname}! See you next week!</h1>
        </div>
      }


    </>
  );
}

export default App;
