import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from "../contactForm";
import { ReasonForContact } from "@annotations";


export default async function Contact({ params }: { params: { reasonForContact: ReasonForContact}; }) {
  return (
    <>
      <section className='flex h-full flex-col items-center justify-center'>
        <h1 className=' w-full max-w-3xl p-4 text-left text-4xl font-semibold sm:text-5xl'>
          Contact Me
        </h1>
        <ContactForm  
          defaultReasonForContact={params.reasonForContact}
        />
      </section>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        limit={3}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        closeButton={false}
      />
    </>
  );
}

