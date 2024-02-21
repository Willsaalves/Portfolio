  import { Container, ContainerSucces } from './styles';
  import { useForm, ValidationError } from '@formspree/react';
  import { toast, ToastContainer } from 'react-toastify';
  import ReCAPTCHA from 'react-google-recaptcha';
  import { useEffect, useState } from 'react';
  import validator from 'validator';


  export function Form() {
    const [state, handleSubmit] = useForm('mvoeanjw');
    const [validEmail, setValidEmail] = useState(false);
    const [isHuman, setIsHuman] = useState(false);
    const [message, setMessage] = useState('');
  
    // Estado para controlar se deve mostrar o erro de e-mail
    const [showEmailError, setShowEmailError] = useState(false);
  
    // Função para verificar o formato do e-mail
    function verifyEmail(email: string) {
      // Atualiza o estado showEmailError com base na validação do e-mail
      setShowEmailError(!validator.isEmail(email));
  
      // Atualiza o estado validEmail com base na validação do e-mail
      setValidEmail(validator.isEmail(email));
    }
  
    // Função para lidar com o envio do formulário
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      // Chama a função handleSubmit do useForm
      await handleSubmit(event);
    };
  
    useEffect(() => {
      // Atualiza o estado showEmailError se houver erros no estado
      setShowEmailError(state.errors.length > 0);
    }, [state.errors]);
  
    useEffect(() => {
      if (state.succeeded) {
        toast.success('Email enviado com sucesso!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        });
      }
    }, [state.succeeded]);
  
    if (state.succeeded) {
      return (
        <ContainerSucces>
          <h3>Obrigado, entro em contato com você em até 1 hora! </h3>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Voltar ao topo
          </button>
          <ToastContainer />
        </ContainerSucces>
      );
    }
  
    return (
      <Container>
        <h2>Entre em contato através do formulário</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              verifyEmail(e.target.value);
            }}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          {showEmailError && !validEmail && (
            <div style={{ color: 'red', marginTop: '5px' }}>
              Email inválido. Por favor, insira um e-mail válido.
            </div>
          )}
          <textarea
            required
            placeholder="Envie uma mensagem para começar."
            id="message"
            name="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <ReCAPTCHA
            sitekey="6LeFInopAAAAAEsP95ow4GvjKdx1rp-vbRsaS9ie"
            onChange={() => {
              setIsHuman(true);
            }}
          ></ReCAPTCHA>
          <button
            type="submit"
            disabled={state.submitting || !validEmail || !message || !isHuman}
          >
            Enviar
          </button>
        </form>
        <ToastContainer />
      </Container>
    );
  }
  
