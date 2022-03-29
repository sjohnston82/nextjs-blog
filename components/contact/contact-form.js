import { useState, useEffect } from "react";
import Notification from "../ui/notification";

import classes from "./contact-form.module.css";

async function sendContactData(formData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', or 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData(formData);
      setRequestStatus("success");
      setFormData({
        email: "",
        name: "",
        message: "",
      });
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message was sent successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Contact Big Ern today!</h1>
      <p>
        Between helping our nation's youth and crushing it on the lanes, my time
        to interact with my adoring fan base is unfortunately extremely limited.
        Please be patient.{" "}
      </p>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
              onChange={onChangeHandler}
              value={formData.email}
            />

            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                required
                onChange={onChangeHandler}
                value={formData.name}
              />
            </div>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message for Big Ern</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            onChange={onChangeHandler}
            value={formData.message}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
