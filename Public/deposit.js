function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validateDeposit(field, label, deposit){
        let number = [0-9]
        if (!number) {
            setStatus(
                "Your deposit could not be completed. Please enter a valid, positive number."
            );
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(deposit);
        ctx.users.push({deposit,balance:1000});
        setShow(false);
    }
    function clearForm(){
        setDeposit('')
        setShow(true);
    }

    return (
        <Card
            bgcolor="primary"
            class="card border-info mb-3"
            header="Deposit Money"
            status={status}
            body={show ? (
                <>
                    Deposit<br/>
                    <input type="input"
                           className="form-control"
                           id="deposit"
                           placeholder="Enter amount"
                           value={deposit}
                           onChange={e => setDeposit(e.currentTarget.value)} /><br/>
                    <button
                        type="submit"
                        className="btn btn-light"
                        disabled={deposit === ""}
                        onClick={handleCreate}>Deposit
                    </button>
                    <br/>
                </>
            ):(
                <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add more money</button>
                </>
            )}
        />
    )
}
