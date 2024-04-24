import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import DefaultButton from "../../components/defaultButton";
import { Accordion } from "flowbite-react";

const data = [
  {
    question : "What is Flowbite?",
    answer : "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    question : "Can I switch to s different plan?",
    answer : "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    question : "Do you offer non-disclouser signature?",
    answer : "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    question : "Do you issue loans?",
    answer : "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    question : "Are there any long-terms contracts?",
    answer : "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
]


function Faq(props) {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? false : value);
  return (
    <div className="lg:grid lg:grid-cols-6 gap-10 block items-top lg:my-[100px] my-50 lg:p-[80px] p-4 justify-center">
      <div className="lg:grid lg:col-span-3 flex flex-col gap-4 lg:gap-8">
        <div>
          <p className="block font-sans text-base antialiased text-xl font-semibold leading-none text-secondaeryColor">
            Questions & Answers
          </p>
          
        </div>
        <div className="">
          <h5 className="block font-sans text-2xl lg:text-5xl antialiased font-semibold leading-none tracking-normal ">
            Have any questions?
          <br />
          <span className="text-2xl lg:text-5xl text-gray-400">Find answers here.</span></h5>
        </div>
        <div>
          <p className="text-lg text-gray-400">
            If you’re new to Genie or looking to supercharge your current stack,
            this section will help you learn more about the platform and its
            features.
          </p>
        </div>
        <div className=" py-4">
          <a href="#" className="inline-block">
            <DefaultButton
              title={"Contact Us"}
              className="bg-primaryColor text-white"
            />
          </a>
        </div>
      </div>
      <div className="lg:grid lg:col-span-3 block">
      
        <Accordion className="border-none">
        {data.map((data) => (
          <Accordion.Panel>
            <Accordion.Title className="hover:bg-transparent focus:ring-0 bg-transparent text-lg font-semibold text-black">{data.question}</Accordion.Title>
            <Accordion.Content>
              {data.answer}
            </Accordion.Content>
          </Accordion.Panel>
          
      ))}
      </Accordion>
        {/* <Accordion className="border-none">
          <Accordion.Panel>
            <Accordion.Title className="hover:bg-transparent focus:ring-0 bg-transparent">What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="hover:bg-transparent focus:ring-0 bg-transparent">Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="hover:bg-transparent focus:ring-0 bg-transparent">
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion> */}
      </div>
    </div>
  );
}

export default Faq;
