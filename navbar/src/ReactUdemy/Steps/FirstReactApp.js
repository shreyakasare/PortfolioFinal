import React, { useState } from "react";
import "./indexs.css";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

const FirstReactApp = () => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        debugger;
        if (step > 1) setStep((s) => s - 1);
        //update the state based on the current value (callback)
    }

    function handleNext() {
        if (step < 3) {
            setStep((s) => s + 1);
        }
    }

    function Button({ textColor, bgColor, onClick, text, children }) {
        debugger
        return (
            <button
                style={{ backgroundColor: bgColor, color: textColor }}
                onClick={onClick}>
                {children}
            </button>
        )
    }

    function StepMessage({ step, children }) {
        return (
            <div className="message">
                <h6>Step {step}</h6>
                {children}
            </div>
        )
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen((is) => !is)}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                    </div>

                    <StepMessage step={step}>
                        {messages[step - 1]}
                    </StepMessage>

                    <div className="buttons">
                        <Button
                            textColor='#fff'
                            bgColor='#7950f2'
                            onClick={handlePrevious}>
                            <span>Previous</span>
                        </Button>
                        <Button
                            textColor='#fff'
                            bgColor='#7950f2'
                            onClick={handleNext}>
                            <span>Next</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FirstReactApp;
