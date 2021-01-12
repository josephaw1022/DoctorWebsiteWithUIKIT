// import React from "react";

// // reactstrap components
// import { Button, Form, Input, Container, Row, Col } from "reactstrap";
// import "./Contact.css"
// import { InputGroupAddon, InputGroup, InputGroupText} from 'reactstrap';


// // function Contact() {
// //   let contactheader = React.createRef(); 

// //   React.useEffect(() => {
// //     if (window.innerWidth < 991) {
// //       const updateScroll = () => {
// //         let windowScrollTop = window.pageYOffset / 3;
// //         contactheader.current.style.transform =
// //           "translate3d(0," + windowScrollTop + "px,0)";
// //       };
// //       window.addEventListener("scroll", updateScroll);
// //       return function cleanup() {
// //         window.removeEventListener("scroll", updateScroll);
// //       };
// //     }
// //   });


// //   return (
// //     <>
    
      

// //     </>
// //   );
// // }

// // export default Contact;

// function ContactUs() {
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("contact-page");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("contact-page");
//     };
//   });
//   return (
//     <>
//       {/* <InfoNavbar /> */}
//       <div className="main">
//         <div className="section contactbground"
      
//             >
//           <Container>
            
//             <Row>
//               <Col className="ml-auto mr-auto text-center" md="8">
//                 <h2 className="title" style={{color:"white"}}>Get in touch with us</h2>
//                 <h3 className="title adjust adjust">
//                   <small style={{color:"white"}}>  Collaboratively administrate empowered markets via
//                   plug-and-play networks. Dynamically procrastinate B2C users
//                   after installed base benefits. Dramatically visualise customer
//                   directed convergence without revolutionary ROI.</small>
//                 </h3>
                
//               </Col>
//             </Row>
//             <Row>
//               {/*  */}
//             </Row>
//             <Row>
//               <Col className="ml-auto mr-auto text-center" md="6">
//                 <h3 className="title adjust adjust">
//                   <small style={{color:"white"}}>Or drop us a note</small>
//                 </h3>
//                 <Form className="contact-form">
//                   <Row>
//                     <Col >
//                       <label>First name</label>
//                       <InputGroup>
//                         <InputGroupAddon addonType="prepend">
//                           <InputGroupText>
//                             <i className="nc-icon nc-single-02" />
//                           </InputGroupText>
//                         </InputGroupAddon>
//                         <Input placeholder="Full name" type="text" />
//                       </InputGroup>
//                       </Col> 
//                       <Col> 
//                       <label>Last name</label>
//                       <InputGroup>
//                         <InputGroupAddon addonType="prepend">
//                           <InputGroupText>
//                             <i className="nc-icon nc-single-02" />
//                           </InputGroupText>
//                         </InputGroupAddon>
//                         <Input placeholder="Full name" type="text" />
//                       </InputGroup>
//                     </Col>
//                     </Row>
//                     <Row>
//                     <Col >
//                       <label>Email</label>
//                       <InputGroup>
//                         <InputGroupAddon addonType="prepend">
//                           <InputGroupText>
//                             <i className="nc-icon nc-email-85" />
//                           </InputGroupText>
//                         </InputGroupAddon>
//                         <Input placeholder="Email" type="text" />
//                       </InputGroup>
//                     </Col>
//                   </Row>
//                   <label>Message</label>
//                   <Input
//                     placeholder="Tell us your thoughts and feelings..."
//                     type="textarea"
//                     rows="4"
//                   />
//                   <Row>
//                     <Col className="ml-auto mr-auto" md="4">
//                       <Button className="btn-fill" color="danger" size="lg">
//                         Send Message
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Form>
//                 <h3 className="visit">
//                   <small>Or come and visit</small>
//                 </h3>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//       <div className="big-map" id="contactUsMap">
//         {/* <MapWrapper
//           googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={<div style={{ height: `100%` }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//         /> */}
//       </div>
      
//     </>
//   );
// }

// export default ContactUs;

