import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../../Assets/logo.png";

const jscriptData = [
    {
        label: "Accordion", url: "/acc",
    },
    {
        label: "Tutorials",
        submenu: [
            {
                label: "React",
                url: "/react",
                submenu: [
                    {
                        label: "Hooks",
                        url: "/react/hooks",
                    },
                    {
                        label: "Context",
                        url: "/react/context",
                    },
                ],
            },
            {
                label: "JavaScript",
                url: "/javascript",
            },
        ],
    },
    {
        label: "Time Counter",
        url: "/timeCntr",
    },
];

const navBarData = [
    {
        label: "Steps", url: "/frstApp",
    },
    {
        label: "Projects",
        submenu: [
            {
                label: "React",
                url: "/react",
                submenu: [
                    {
                        label: "UsePopCorn",
                        url: "/usePop",
                    },
                    {
                        label: "Context",
                        url: "/react/context",
                    },
                    {
                        label: "TipCal",
                        url: "/tipCal",
                    },
                    {
                        label: "SplitBills",
                        url: "/spBill"
                    }
                ],
            },
            {
                label: "JavaScript",
                url: "/javascript",
            },
        ],
    },
    {
        label: "Time Counter",
        url: "/timeCntr",
    },
    {
        label: "List App",
        url: "/listApp",
    },
    {
        label: "Flash Cards",
        url: "/flCards",
    },
    {
        label: "Atomic Blog",
        url: "/atoBlog",
    },
    {
        label: "Accordion",
        url: "/acc",
    },
];

const jnavBarData = [
    {
        label: "Guess My Number", url: "/guessNum",
    },
    {
        label: "Projects",
        submenu: [
            {
                label: "React",
                url: "/react",
                submenu: [
                    {
                        label: "UsePopCorn",
                        url: "/usePop",
                    },
                    {
                        label: "Context",
                        url: "/react/context",
                    },
                    {
                        label: "TipCal",
                        url: "/tipCal",
                    },
                    {
                        label: "SplitBills",
                        url: "/spBill"
                    }
                ],
            },
            {
                label: "JavaScript",
                url: "/javascript",
            },
        ],
    },
    {
        label: "Time Counter",
        url: "/timeCntr",
    },
    {
        label: "List App",
        url: "/listApp",
    },
    {
        label: "Flash Cards",
        url: "/flCards",
    },
    {
        label: "Atomic Blog",
        url: "/atoBlog",
    },
    {
        label: "Accordion",
        url: "/acc",
    },
];

const NavBarPanel = () => {
    const cartProducts = useSelector(state => state.cart);

    const jscriptShow = (mItems) => {
        return mItems.map(
            (item, index) => {
                if (item.submenu) {
                    return (
                        <NavDropdown
                            title={item.label}
                            key={index}
                            className='dropdown-menu-dark  
                        dropend'>
                            {jscriptShow(item.submenu)}
                        </NavDropdown>
                    );
                }
                else {
                    return (
                        <Nav.Link
                            href={
                                item.url
                            }
                            key={index}
                        >
                            {item.label}
                        </Nav.Link>
                    )
                }
            }
        )
    };

    const menuShow = (mItems) => {
        return mItems.map(
            (item, index) => {
                if (item.submenu) {
                    return (
                        <NavDropdown
                            title={
                                item.label
                            }
                            key={index}
                            className="dropdown-menu-darkdropend"
                        >
                            {menuShow(
                                item.submenu
                            )}
                        </NavDropdown>
                    );
                } else {
                    return (
                        <Nav.Link
                            href={
                                item.url
                            }
                            key={index}>
                            {item.label}
                        </Nav.Link>
                    );
                }
            }
        );
    };

    const jmenuShow = (jmItems) => {
        return jmItems.map(
            (item, index) => {
                if (item.submenu) {
                    return (
                        <NavDropdown
                            title={
                                item.label
                            }
                            key={index}
                            className="dropdown-menu-darkdropend"
                        >
                            {jmenuShow(
                                item.submenu
                            )}
                        </NavDropdown>
                    );
                } else {
                    return (
                        <Nav.Link
                            href={
                                item.url
                            }
                            key={index}>
                            {item.label}
                        </Nav.Link>
                    );
                }
            }
        );
    };

    const navStyle = {
        color: "black",
        fontWeight: "bold",
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <img className='logo' src={logo} alt="logo" />
            <Container fluid>
                <Navbar.Brand>Redux Toolkit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>

                        <NavDropdown title="React Udemy" id="navbarScrollingDropdown">
                            {menuShow(navBarData)}
                        </NavDropdown>

                        <NavDropdown title="JavaScript Udemy" id="navbarScrollingDropdown">
                            {jmenuShow(jnavBarData)}
                        </NavDropdown>

                        {/* Drop down */}
                        <NavDropdown title="Concepts" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="todos">
                                <Nav.Link to='todos' as={Link}>
                                    To Do UseReducer
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="rudemy">
                                <Nav.Link to='rudemy' as={Link}>
                                    React Udemy
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href='usedash'>
                                <Nav.Link to='usedash' as={Link}>
                                    Use Context Hook
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="cntxt">
                                <Nav.Link to='cntxt' as={Link}>
                                    Context API
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                Something else here
                            </NavDropdown.Item>

                            <NavDropdown title="React Udemy" id="navbarScrollingDropdown">
                                {jscriptShow(jscriptData)}
                            </NavDropdown>

                            <NavDropdown.Item>
                                <Nav.Link to='mern' as={Link}>
                                    MERN
                                </Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Drop down */}
                        <NavDropdown title="Json Typicode" id="navbarScrollingDropdown">
                            <NavDropdown.Item >
                                <Nav.Link to='posts' as={Link}>
                                    Posts
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item >
                                <Nav.Link to='prime' as={Link}>
                                    Prime Number
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item >
                                <Nav.Link to='fil' as={Link}>
                                    Filter Array
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item >
                                <Nav.Link to='tablePagination' as={Link}>
                                    Table Pagination
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item >
                                <Nav.Link to='second' as={Link}>
                                    Accordion
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* extra */}
                        <NavDropdown title="Projects" id="navbarScrollingDropdown">
                            <NavDropdown.Item >
                                <Nav.Link to='about' as={Link}>
                                    About
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Nav.Link to='product' as={Link}>
                                    Products
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <Nav.Link to='hikeCalc' as={Link}>
                                    Hike Calculator
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="watermarkremoval">
                                <Nav.Link to='watermarkremoval' as={Link}>
                                    Rapid API
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="pizzaProject">
                                <Nav.Link to='pizzaProject' as={Link}>
                                    Pizza Project
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="cardcaro">
                                <Nav.Link to='cardcaro' as={Link}>
                                    Card Carousel
                                </Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                        </NavDropdown>
                        {/* extra */}

                        <Nav.Link to='dashboard' as={Link}>Dashboard</Nav.Link>
                        <Nav.Link to='cssstudy' as={Link}>CSS</Nav.Link>
                        {/* <Nav.Link to='login' as={Link}>Login</Nav.Link> */}
                        <Nav.Link to='loginauth' as={Link}>LoginAuth</Nav.Link>

                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


    // return (
    //     <Navbar expand="lg" className="bg-body-tertiary">
    //         <img className='logo' src={logo} alt="logo" />
    //         <Container fluid>
    //             <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
    //             <Navbar.Toggle aria-controls="navbarScroll" />
    //             <Navbar.Collapse id="navbarScroll">
    //                 <Nav
    //                     className="me-auto my-2 my-lg-0"
    //                     style={{ maxHeight: '100px' }}
    //                     navbarScroll>

    //                     {/* Drop down */}
    //                     <NavDropdown title="Concepts" id="navbarScrollingDropdown">
    //                         <NavDropdown.Item href="todos">
    //                             <Nav.Link to='todos' as={Link}>
    //                                 To Do UseReducer
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="rudemy">
    //                             <Nav.Link to='rudemy' as={Link}>
    //                                 React Udemy
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href='usedash'>
    //                             <Nav.Link to='usedash' as={Link}>
    //                                 Use Context Hook
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="cntxt">
    //                             <Nav.Link to='cntxt' as={Link}>
    //                                 Context API
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Divider />
    //                         <NavDropdown.Item href="#action5">
    //                             Something else here
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="jscript">
    //                             JavaScript
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="mern">
    //                             <Nav.Link to='mern' as={Link}>
    //                                 MERN
    //                             </Nav.Link>
    //                         </NavDropdown.Item>
    //                     </NavDropdown>

    //                     {/* Drop down */}
    //                     <NavDropdown title="Json Typicode" id="navbarScrollingDropdown">
    //                         <NavDropdown.Item href="posts">
    //                             <Nav.Link to='posts' as={Link}>
    //                                 Posts
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="prime">
    //                             <Nav.Link to='prime' as={Link}>
    //                                 Prime Number
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="fil">
    //                             <Nav.Link to='fil' as={Link}>
    //                                 Filter Array
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="tablePagination">
    //                             <Nav.Link to='tablePagination' as={Link}>
    //                                 Table Pagination
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="second">
    //                             <Nav.Link to='second' as={Link}>
    //                                 Accordion
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Divider />
    //                         <NavDropdown.Item href="#action5">
    //                             Something else here
    //                         </NavDropdown.Item>
    //                     </NavDropdown>

    //                     {/* extra */}
    //                     <NavDropdown title="Projects" id="navbarScrollingDropdown">
    //                         <NavDropdown.Item href="todos">
    //                             <Nav.Link to='about' as={Link}>
    //                                 About
    //                             </Nav.Link>
    //                         </NavDropdown.Item>
    //                         <NavDropdown.Item href="product">
    //                             <Nav.Link to='product' as={Link}>
    //                                 Products
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="hikeCalc">
    //                             <Nav.Link to='hikeCalc' as={Link}>
    //                                 Hike Calculator
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="watermarkremoval">
    //                             <Nav.Link to='watermarkremoval' as={Link}>
    //                                 Rapid API
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Item href="pizzaProject">
    //                             <Nav.Link to='pizzaProject' as={Link}>
    //                                 Pizza Project
    //                             </Nav.Link>
    //                         </NavDropdown.Item>

    //                         <NavDropdown.Divider />
    //                     </NavDropdown>
    //                     {/* extra */}

    //                     <Nav.Link to='dashboard' as={Link}>Dashboard</Nav.Link>
    //                     <Nav.Link to='cssstudy' as={Link}>CSS</Nav.Link>
    //                     {/* <Nav.Link to='login' as={Link}>Login</Nav.Link> */}
    //                     <Nav.Link to='loginauth' as={Link}>LoginAuth</Nav.Link>

    //                 </Nav>
    //                 <Navbar.Toggle />
    //                 <Navbar.Collapse className='justify-content-end'>
    //                     <Navbar.Text>
    //                         <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
    //                     </Navbar.Text>
    //                 </Navbar.Collapse>
    //                 <Form className="d-flex">
    //                     <Form.Control
    //                         type="search"
    //                         placeholder="Search"
    //                         className="me-2"
    //                         aria-label="Search"
    //                     />
    //                     <Button variant="outline-success">Search</Button>
    //                 </Form>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar>
    // )
}

export default NavBarPanel