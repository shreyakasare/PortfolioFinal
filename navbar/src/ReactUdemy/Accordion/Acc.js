import React, { useState } from "react";
import "./Acc.css";
const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
    {
        title: "John Doe",
        age: 19,
        gender: "Rather not to say",
        country: "India",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },

];

const Acc = () => {
    return (
        <div>
            <Accoridon data={faqs} />
        </div>
    );
};

function Accoridon({ data }) {
    const [curOpen, setCurOpen] = useState(null);
    return (
        <div className="accordion">
            {data.map((el, i) => (
                <AccordionItem
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={el.title}
                    num={i}
                    key={el.title}
                    age={el.age}
                >
                    {el.text}
                    {el.age}
                    {el.gender}
                    {el.country}
                    {el.description}
                </AccordionItem>
            ))}
        </div>
    );
}

function AccordionItem({ num, title, text, curOpen, onOpen, children }) {
    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num)
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 0 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>

            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}

export default Acc;
