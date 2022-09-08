function Deposit(){
  const [amount, setAmount]       = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate (fieldName, fieldValue) {

    var z1 = [0 - 9];
    {
      if (!z1.test ( fieldValue )) {
        alert ( 'Please provide a valid Enrollment Number' );
        return false;
      }
    }
  }

  function myFunction() {
    alert("Error: Not a number. Please enter a valid amount.");
  }
  myFunction();


    let status = `Account Balance $ ${totalState} `;

  // const ATMDeposit = ({ onChange, isDeposit }) => {
  //   const choice = ["Deposit", "Cash Back"];
  //   console.log(`ATM isDeposit: ${isDeposit}`);
  //   return (
  //       <label className="label huge">
  //         <h3> {choice[Number(!isDeposit)]}</h3>
  //         <input type="number" width="200" onChange={onChange}></input>
  //         <input type="submit" width="200" value="Submit"></input>
  //       </label>
  //   );
  // };
  return (
    <h1>Deposit</h1>
  <Card
      bgcolor="primary"
      header="Deposit Money"
      status={status}
      body={show ? (
          <>
            <br>Deposit<br/>
            <input type="number" className="form-control" id="deposit" placeholder="Enter deposit amount" value={number} onChange={e => setAmount(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
          </>
      ):(
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
          </>
      )}
  />
)
  )
}
