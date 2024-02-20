import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contato</h2>
        <p>Pronto para iniciar seu projeto? </p>
        <p>Me contate para uma consultoria gratuita.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="will.saalves@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:will.saalves@gmail.com">will.saalves@gmail.com</a>
        </div>
        <div>
        <a href="tel:+5511984163442"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+5511984163442">(+55) 11984163442</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}