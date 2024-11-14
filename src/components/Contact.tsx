import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { Alert, AlertColor, Snackbar } from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>("success");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false); // Loading state
  const form = useRef();

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: value === "" });
  };

  // Validate form inputs
  const validateForm = () => {
    const errors = {
      name: formData.name === "",
      email: formData.email === "",
      message: formData.message === "",
    };
    setFormErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) return;

    if (validateForm()) {
      setLoading(true); // Start loading
      const templateParams = {
        from_name: formData.name,
        to_name: "Atik",
        email: formData.email,
        message: formData.message,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSeverity("success");
        setMessage("Submitted successfully");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setSeverity("error");
        setMessage("Something went wrong");
      } finally {
        setOpen(true);
        setLoading(false); // End loading
      }
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="name"
                label="Your Name"
                placeholder="What's your name?"
                value={formData.name}
                onChange={handleInputChange}
                error={formErrors.name}
                helperText={formErrors.name ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={formData.email}
                onChange={handleInputChange}
                error={formErrors.email}
                helperText={
                  formErrors.email
                    ? "Please enter your email or phone number"
                    : ""
                }
              />
            </div>
            <TextField
              required
              id="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={formData.message}
              onChange={handleInputChange}
              error={formErrors.message}
              helperText={formErrors.message ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={
                loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
              onClick={sendEmail}
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </Box>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
