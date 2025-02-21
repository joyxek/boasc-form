import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {


  const [values, setValues] = useState({
    firstname: '',
    dates: {
      Option1: '',
      Option2: '',
      Option3: '',
      Option4: '',
      Option5: '',
      Option6: '',
      Option7: '',
      Option8: '',
      Option9: ''
    }
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


  // Functions for catching errors upon user submission
  const findDuplicates = (obj) => {
    const seen = new Map()
    const duplicates = {}

    for (const [key, value] of Object.entries(obj)) {
      if (seen.has(value)) {
        duplicates[value] = [...seen.get(value), key]
      } else {
        seen.set(value, [key])
      }
    }

    return Object.keys(duplicates).length > 0 ? duplicates : null
  }


  const allKeysHaveValues = (obj) => {
    return Object.values(obj).every(value => value !== "" && value !== null && value !== undefined && value !== "-");
  };



  const handleOrderSubmit = (e) => {
    e.preventDefault()
    // check to see that no numbers are duplicated
    console.log(values.dates);

    // if there are duplicates in the object 
    // return that there are duplicates
    const duplicateEntries = findDuplicates(values.dates)
    if (!allKeysHaveValues(values.dates)) {
      setErrorModal(false)
      setErrorModalTwo(true)
      console.log('empty entries detected')
      return

    }
    if (duplicateEntries) {
      setErrorModalTwo(false)
      setErrorModal(true)
      console.log('duplicate entries detected')
      return

    }

    else {
      setErrorModal(false)
      setErrorModalTwo(false)
      setOrderModal(false)
      setSubmitModal(true)
      console.log('form has been submitted')
    }


    // if there are any empty object key value pairs
    // return that there are empty selections

    // else move on to the next page
  }

  // checking for duplicates

  // onSubmit - it should take a snapshot of the array that was sent in to be checked 
  // hold that snapshot in memory
  // the user will then create new selections 
  // fix the duplicate 
  // then we need to compare that against the array from memory


  // [1,2,3,4,4]
  // [1,2,3,4,4,5]
  // if the algo knows that there are only allowed to be 5 selections
  // then maybe it can remove the duplicate at this point 

  // [1,2,2]
  // first check for duplicates 
  // if there's duplicates return ERROR
  // this array will return error

  // [1,2,2,1,3]
  // check for duplicates
  // return error
  // [1,2,2,1,3,] // [1,1,3] 
  // [1,2,2,1,3,-] // [1,-,3]
  // check for duplicates
  // there are no duplicates
  // check for '-'
  // return ERROR
  // [1,2,2,1,3,-,2] // [1,2,3]
  // check for duplicates

  // [1,2,2]
  // [1,2,2,3]


  // {option1: 1, option2: 2, option3:2}
  // loop over this object and make sure that there are no duplicates
  // {option1: 1, option 2: 2, options3: 3}
  // loop over 
  // there are no duplicates

  // {option1: 1, option2: -, option3:3}
  // looped over and something is not a number so wtf

  // 

  // have another like master array  [1,2,3]
  // loop over users array and compare with master array
  // if there is a number that is in the array
  // throw the users number in a new array
  // [1,2]  

  // [1,2,2,2,2]
  // [1,2,2,2,2,3,4,5]
  // check to see if new array is exactly 5
  // it is not
  // then use set method to get rid of all the duplicates 
  // [1,2,3,4,5]
  // check to see if it is 5 


  // [1,2,2,3,4]
  // it will return error message that there are duplicates
  // [1,2,2,3,4,-]
  // it will check to see if array is exactly 5
  // it is not
  // use set to get rid of duplicates
  // [1,2,3,4,-]
  // check to see if #s 1,2,3,4,5 are all present
  // it is not
  // return error that your selection was not complete


  // [1,1,1,1,3]
  // it will return error that there are duplicates
  // user corrects to
  // [1,1,1,1,3,2,2,4]
  // algo will check to see if the array is exactly 5 
  // it is not
  // algo will then use set to get rid of duplicates
  // [1,3,2,4]
  // algo will check to make sure that number 1-5 are all there
  // it is not
  // the error here is that there was a duplicate of 2 that we did not catch in the user's second go around


  // is there any way to get the array in memory to remove values that were causing an error?
  // is there also a way to highlight the values that were causing an error







  // hm do we need this
  const handleChange = (e) => {
    e.preventDefault()
    setValues({ ...values, [e.target.name]: [e.target.value] })
    console.log(values)
  }

  // We need to handle this to make sure that people don't submit duplicates
  const handleOrderChange = (e) => {
    e.preventDefault()
    // change this so that it pushes the right values into object
    const { value } = e.target
    const optionKey = e.target.getAttribute("data-option")


    setValues((prevValues) => ({
      ...prevValues,
      dates: {
        ...prevValues.dates, [optionKey]: value,
      }
    })
    )
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
      {!nameModal &&
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
        orderModal && <>
          <h3>We can't guarantee that this will be your order next week, we will definitely take it into consideration.</h3>
          <h3>Please select in order from 1-9 your preferred 1:1 date order</h3>
          <form onSubmit={handleOrderSubmit}>
            <label htmlFor="dates">Possible Dates</label>


            <div>Option 1</div>
            <select name="dates" id="dates" data-option="Option1" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option2" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option3" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option4" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option5" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option6" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option7" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option8" onChange={(e) => handleOrderChange(e)} required >
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
            <select name="dates" id="dates" data-option="Option9" onChange={(e) => handleOrderChange(e)} required >
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

