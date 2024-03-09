'use client';

import { createRef, useEffect, useRef, useState } from "react";
//@ts-ignore
import { useFormState } from 'react-dom';

import ReCAPTCHA from 'react-google-recaptcha';
import TextareaAutosize from 'react-textarea-autosize';
import { toast } from 'react-toastify';

import Dropdown from "./dropdown";
import RequiredLabel from './requiredLabel';
import { sendContact } from './action';
import { ReasonForContact } from "@annotations";

const initialState = {
  status: "",
  message: ""
};

interface ContactFormProps {
  defaultReasonForContact?: ReasonForContact;
}
export default function ContactForm({ defaultReasonForContact = ReasonForContact.Default }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // We should set this in a useEffect hook in case the value passed in from the url is not valid
  const [reasonForContact, setReasonForContact] = useState(defaultReasonForContact);
  const [phone, setPhone] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [preferredCommunication, setPreferredCommunication] = useState("email");

  const recaptchaRef = createRef<ReCAPTCHA>();

  const inputRef = useRef<HTMLFormElement>(null);

  const [state, action] = useFormState(sendContact, initialState);

  useEffect(() => {
    if (state.status === "success") {
      toast.info(state.message);
    } else if (state.status === "failure") {
      toast.warn(state.message);
    }
  }, [state]);

  const resetAction = () => {
    setPhone("");
    setEmail("");
    setName("");
    setReasonForContact(ReasonForContact.Default);
    setAdditionalComments("");
    // Default option is email
    setPreferredCommunication("email");
  };

  const phoneNumberValid = () => {
    if (phone != "") {
      if (phone.match(/[a-zA-Z]/)) {
        return false;
      }
    }
    return true;
  };
  const onSubmit = async (e: any) => {
    // Don't automatically send the form action until captcha function completes
    e.preventDefault();
    if (!phoneNumberValid()) {
      toast.warn("Please enter in a valid phone number and try again");
      return;
    }

    if (recaptchaRef.current) {
      const token = await recaptchaRef.current?.executeAsync();
      if (token != null) {
        inputRef.current && inputRef.current.requestSubmit();
      } else {
        toast.warn("Please try submitting again");
      }
    }
  };

  return (
    <form
      className=" border-t-text flex w-full max-w-3xl flex-col border-t-[.5px] p-1"
      action={action}
      ref={inputRef}
    >
      <ReCAPTCHA
        className='absolute'
        ref={recaptchaRef}
        size='invisible'
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
      />
      <div className="label">
        <label className="label-text mt-2 flex flex-row gap-1" htmlFor="reasonForContact-input">Reason for Contact</label>
      </div>
      <Dropdown
        selectedValue={reasonForContact}
        setSelectedValue={setReasonForContact}
        defaultValue={"na"}

        id="reassonForContact-input"
        options={[
          { label: "Reason for contact", value: String(ReasonForContact.Default), hidden: true },
          { label: "Resume Request", value: String(ReasonForContact.ResumeRequest) },
          { label: "General Contact", value: String(ReasonForContact.GeneralContact) },
          { label: "Request for Interview", value: String(ReasonForContact.InterviewRequest) },
          { label: "Other", value: String(ReasonForContact.Other) },
        ]}
      />
      <input
        name="reasonForContact"
        type="hidden"
        required
        value={reasonForContact}
      />
      <RequiredLabel
        htmlFor="name-input"
        labelText="Name"
      />
      <input
        required
        type="text"
        name="name"
        id="name-input"
        placeholder="Name"
        className="input input-bordered font-norml w-96"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <RequiredLabel
        htmlFor="email-input"
        labelText="Email"
      />
      <input
        required
        type="email"
        name="email"
        id="email-input"
        placeholder="Email"
        className="input input-bordered w-96 font-normal"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className="label">
        <label className="label-text" htmlFor="phone-input">Phone Number</label>
      </div>
      <input
        type="tel"
        name="phone"
        id="phone-input"
        placeholder="Phone Number"
        className="input input-bordered w-96 font-normal"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <input
        type="hidden"
        value={preferredCommunication}
        name="preferredCommunication"
      />
      {phone && (
        <div className="w-96">
          <div className="label">
            <label className="label-text" htmlFor="phone-input">Preferred mode of communication</label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Email</span>
              <input
                type="radio"
                className="radio checked:bg-blue-500"
                value="email"
                checked={preferredCommunication == "email"}
                onChange={e => setPreferredCommunication(e.target.value)}
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Phone</span>
              <input
                type="radio"
                className="radio checked:bg-blue-500"
                value="phone"
                checked={preferredCommunication == "phone"}
                onChange={e => setPreferredCommunication(e.target.value)}
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">No preference</span>
              <input
                type="radio"
                className="radio checked:bg-blue-500"
                value="no preference"
                checked={preferredCommunication == "no preference"}
                onChange={e => setPreferredCommunication(e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
      <div className="label">
        <label className="label-text mt-2 flex flex-row gap-1" htmlFor="additionalComments-input">Additional comments</label>
      </div>
      <TextareaAutosize
        minRows={4}
        maxRows={4}
        id="additionalComments-input"
        name="additionalComments"
        placeholder="Additional comments"
        className="input input-bordered w-[32rem] resize-none overflow-y-auto overflow-x-hidden pt-3 focus:outline-none"
        value={additionalComments}
        onChange={e => setAdditionalComments(e.target.value)}
      />
      <div
        className="mt-5 flex flex-row justify-between"
      >
        {recaptchaRef && (<button
          disabled={name.length <= 0 || email.length <= 0 || reasonForContact.length <= 0}
          className="input input-bordered w-24 rounded-lg border-[.5px] p-0 font-normal disabled:cursor-not-allowed disabled:border-[.5px] disabled:border-gray-200 disabled:border-opacity-20 disabled:opacity-90"
          onClick={onSubmit}
        >
          {"Submit"}
        </button>)
        }
        <button
          type="button"
          className="input input-bordered w-24 rounded-lg border-[.5px] p-0 font-normal "
          onClick={resetAction}
        >
          {"Reset"}
        </button>
      </div>
    </form>
  );
}
