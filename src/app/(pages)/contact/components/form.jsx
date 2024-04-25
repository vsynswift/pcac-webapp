"use client";

import { useState } from "react";
import FormField from "./formFiels";
import DefaultButton from "../../components/defaultButton";
import FormTextArea from "./textarea";

function Form() {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "First Name",
      placeholder: "e.g John ",
      width: "half",
    },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      placeholder: "e.g john@gmail.com",
      width: "half",
      type: "text",
    },
    {
      id: 3,
      name: "phone",
      label: "phone",
      placeholder: "9898989898",
      width: "half",
      type: "text",
    },
    {
      id: 4,
      name: "subject",
      label: "Subject",
      placeholder: "Subject",
      width: "half",
      type: "text",
    },
    {
      id: 4,
      name: "detail",
      label: "Details",
      placeholder: "Addition Detail",
      width: "full",
      type: "textarea",
    },
  ]);
  return (
    <div>
      <div className="lg:flex lg:flex-col lg:gap-10 block">
        <h1 className="lg:text-5xl text-2xl py-4 lg:p-0">
          Get In Touch <span className="text-secondaryTextColor"> With Us </span>{" "}
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, sunt in culpa qui officia when an unknown.
        </p>
      </div>
      <div>
        <div className="text-left pt-10">
          <form>
            <div className="flex-wrap flex justify-center">
              {formFields.map((formField) => (
                <div key={formField.id} className="flex flex-nowrap ">
                  {formField.width === "half" ? (
                    <div className="flex p-2 flex-col w-full  text-[14px]">
                      <FormField
                        name={formField.name}
                        placeholder={formField.placeholder}
                        type={formField.type}
                      />
                    </div>
                  ) : formField.type === "textarea" ? (
                    <div className="p-2 flex flex-col flex-wrap w-full text-[14px] ">
                      <FormTextArea
                        name={formField.name}
                        placeholder={formField.placeholder}
                        type={formField.type}
                      />
                    </div>
                  ) : (
                    <div className="p-2 flex flex-col flex-wrap w-full lg:w-[660px] text-[14px] ">
                      <FormField
                        name={formField.name}
                        placeholder={formField.placeholder}
                        type={formField.type}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full p-2">
              <DefaultButton classnames="w-full" title={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
