function Form({addElement}) {
   const getFeedback = (e) => {
      const inputBox = document.querySelector('input')
      e.preventDefault()
      addElement(inputBox.value)
      inputBox.value=""
   }
   return (
      <div className="form">
         <h3>How would you review our services?</h3>
         <div className="input">
            <form>
               <input type="text" placeholder="Enter a review" />
               <button
                  onClick={getFeedback}
                  type="submit"
                  style={{ marginLeft: '10px' }}
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   )
}

export default Form
