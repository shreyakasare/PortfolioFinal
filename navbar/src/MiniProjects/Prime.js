import React, { useRef, useState } from "react";

const Prime = () => {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [primeNumbers, setPrimeNumbers] = useState([]);
    const fromRef = useRef(null)
    const toRef = useRef(null)

    const resetState = (e) => {
        debugger
        setPrimeNumbers([]);
        setFrom("")
        setTo("")
    };

    const isPrime = (num) => {
        debugger;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            } else {
                return num > 1;
            }
        }
    };

    const displayPrime = () => {
        debugger;
        const first = parseInt(from);
        const last = parseInt(to);
        if (!isNaN(first) && !isNaN(last) && first <= last) {
            const prime = [];
            for (let i = first; i <= last; i++) {
                if (isPrime(i)) {
                    prime.push(i);
                    console.log("prime :>> ", prime);
                }
            }
            setPrimeNumbers(prime);
            console.log('fromRef :>> ', fromRef);
            console.log('toRef :>> ', toRef);
        } else {
            setPrimeNumbers([]);
        }
    };

    const dispPrime = primeNumbers.map((prime, index) => {
        debugger;
        return (
            <>
                <li key={index}>{prime}</li>
            </>
        );
    });

    return (
        <>
            <div className='accordionp'>
                <div className="item">
                    <h5 className="mh5">Prime</h5>
                    <input
                        className="inputBoxL"
                        type="number"
                        placeholder="From"
                        value={from}
                        ref={fromRef}
                        onChange={(e) => setFrom(e.target.value)}
                    />

                    <br />
                    <label>
                        To:
                        <input
                            className="inputBoxL"
                            type="number"
                            value={to}
                            ref={toRef}

                            onChange={(e) => setTo(e.target.value)}
                        />
                    </label>
                    <br />
                    <button
                        className="btnLogin"
                        onClick={displayPrime}>
                        Prime Number
                    </button>
                    <div className="row">{dispPrime}</div>
                    <button
                        onClick={resetState}
                        className="btnLogin">
                        Reset
                    </button>
                </div>
            </div >
        </>
    );
};

export default Prime;
