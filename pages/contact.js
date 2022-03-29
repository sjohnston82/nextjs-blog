import ContactForm from "../components/contact/contact-form";
import { Fragment } from "react"
import Head from 'next/head'

import classes from "./contact.module.css";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Ernie McCracken</title>
        <meta name="description" content="A contact form to reach out to your favorite bowler."/>
      </Head>
      <ContactForm />
    </Fragment>
  )
};

export default ContactPage;
