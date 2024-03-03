'use client';
import { useEffect, useState } from "react";
import { useFormState } from 'react-dom';

import TextareaAutosize from 'react-textarea-autosize';
import { toast} from 'react-toastify'

import Dropdown from "./dropdown";
import RequiredLabel from './requiredLabel';
import { sendContact } from './action';

const initialState = {
  status: "",
  message: ""
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reasonForContact, setReasonForContact] = useState("na");
  const [phone, setPhone] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [preferredCommunication, setPreferredCommunication] = useState("email");

  //@ts-ignore
  const [state, action] = useFormState(sendContact, initialState);

  useEffect(() =>{
    if (state.status === "success") {
      toast.info(state.message)
    } else if (state.status === "failure") {
      toast.warn(state.message)
    }
  },[state])

  const resetAction = () => {
    setPhone("");
    setEmail("");
    setName("");
    setReasonForContact("");
    setAdditionalComments("");
    setPreferredCommunication("");
  };

  return (
    <form
      className="border-t-text flex w-full max-w-3xl flex-col border-t-[.5px] p-1"
      action={action}
    >
      <RequiredLabel
        htmlFor="name-input"
        labelText="Name"
      />
      <input
        required
        autoFocus
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
                name="preferredCommunication"
                className="radio checked:bg-blue-500"
                value="email"
                checked={preferredCommunication == "email"}
                onChange={e=> setPreferredCommunication(e.target.value)}
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Phone</span>
              <input
                type="radio"
                name="preferredCommunication"
                className="radio checked:bg-blue-500"
                value="phone"
                checked={preferredCommunication == "phone"}
                onChange={e=> setPreferredCommunication(e.target.value)}
              />
            </label>
              <label className="label cursor-pointer">
                <span className="label-text">No preference</span>
                <input
                  type="radio"
                  name="preferredCommunication"
                  className="radio checked:bg-blue-500"
                  value="no preference"
                  checked={preferredCommunication == "no preference"}
                  onChange={e=> setPreferredCommunication(e.target.value)}
                />
              </label>
          </div>
        </div>
      )

      }
      <RequiredLabel
        htmlFor="reasonForContact-input"
        labelText="Reason for contact"
      />
      <input
        name="reasonForContact"
        type="hidden"
        required
        value={reasonForContact}
      />
      <Dropdown
        selectedValue={reasonForContact}
        setSelectedValue={setReasonForContact}
        defaultValue={"na"}
        id="reassonForContact-input"
        options={[
          { label: "Reason for contact", value: "na", hidden: true },
          { label: "Resume Request", value: "resumeRequest" },
          { label: "General Contact", value: "generalContact" },
          { label: "Request for Interview", value: "interviewRequest" },
          { label: "Other", value: "other" },
        ]}
      />
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
        <button
          type="submit"
          disabled={name.length <= 0 || email.length <= 0 || reasonForContact.length <= 0}
          className="input input-bordered w-24 rounded-lg border-[.5px] p-0 font-normal disabled:cursor-not-allowed disabled:border-[.5px] disabled:border-gray-200 disabled:border-opacity-20 disabled:opacity-90"
        >
          {"Submit"}
        </button>
        <button
          className="input input-bordered w-24 rounded-lg border-[.5px] p-0 font-normal "
          onClick={resetAction}
        >
          {"Reset"}
        </button>
      </div>
    </form>
  );
}
