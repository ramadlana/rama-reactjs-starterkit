import React, { useEffect } from "react";
import {
  Alert,
  Accordion,
  Button,
  Modal,
  Card,
  TextInput,
  Label,
  Select,
  Tabs,
  Spinner,
  Breadcrumb,
} from "flowbite-react";
import {
  HiInformationCircle,
  HiUserCircle,
  HiAdjustments,
  HiClipboardList,
  HiCloudDownload,
  HiHome,
  HiTable,
} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlowbiteComponentSample() {
  // ------------------------------ Sample Data ------------------------------
  const country_example = ["indonesia", "malaysia", "australia"];
  // ------------------------------ Componen Life Cycle ------------------------------
  useEffect(() => {
    // Insert Custom Script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/flowbite@1.5.2/dist/datepicker.js";
    script.async = true;
    document.body.appendChild(script);
    // End Of Insert Custom Script
  }, []);

  // ------------------------------ State ------------------------------
  const [modal, setModal] = useState(false);

  // Form all input define schema here before created input form
  const [allinput, setallInput] = useState({
    name: "",
    email: "",
    age: "",
    birth: "",
    countries: "",
  });
  //  Input Handler
  function handleInputOnChange(event) {
    let input_copy = { ...allinput };
    input_copy[`${event.target.id}`] = event.target.value;
    setallInput(input_copy);
  }

  // ------------------------------ Variables ------------------------------
  const navigate = useNavigate();

  // ------------------------------ Event Handler ------------------------------
  function onClick() {
    setModal(true);
  }

  function onClose() {
    setModal(false);
  }

  // ------------------------------ Return ------------------------------

  return (
    <div>
      <div className="mb-2">
        {/* Other Sample Component */}
        <Button.Group>
          <Button
            size={"xs"}
            color="gray"
            onClick={() => navigate("/example/tableexample")}
          >
            <HiTable className="mr-3 h-4 w-4" /> Table Example
          </Button>
          <Button size={"xs"} color="gray">
            <HiAdjustments className="mr-3 h-4 w-4" /> Other Example
          </Button>
          <Button size={"xs"} color="gray">
            <HiCloudDownload className="mr-3 h-4 w-4" /> Other Example
          </Button>
        </Button.Group>
      </div>
      <h1 className="text-xl font-bold mb-2">
        This is Sample Flowbite Page Component
      </h1>

      <Card>
        {/* Breadcump */}
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
        {/* Tab Group */}
        <Tabs.Group aria-label="Tabs with icons">
          {/* style="underline" */}
          <Tabs.Item active={true} title="Profile" icon={HiUserCircle}>
            Profile content
          </Tabs.Item>
          <Tabs.Item active={false} title="Dashboard" icon={MdDashboard}>
            Dashboard content
          </Tabs.Item>
          <Tabs.Item title="Settings" icon={HiAdjustments}>
            Settings content
          </Tabs.Item>
          <Tabs.Item title="Contacts" icon={HiClipboardList}>
            Contacts content
          </Tabs.Item>
          <Tabs.Item disabled={true} title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
        {/* Text Input */}
        <Label htmlFor="name" value="Fill with your name" />
        <TextInput
          id="name"
          type="text"
          placeholder="Your Name Here"
          value={allinput.name}
          onChange={handleInputOnChange}
        ></TextInput>

        <Label htmlFor="email" value="Email" />
        <TextInput
          id="email"
          type="email"
          placeholder="Your Email Here"
          value={allinput.email}
          onChange={handleInputOnChange}
        ></TextInput>

        <Label htmlFor="age" value="Age" />
        <TextInput
          id="age"
          type="number"
          placeholder="Your Age Here"
          value={allinput.age}
          onChange={handleInputOnChange}
        ></TextInput>

        <Label htmlFor="birth" value="Your Birthday" />
        <input
          type={"datetime-local"}
          className={
            "w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          }
          id="birth"
          onChange={handleInputOnChange}
        ></input>

        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your country" />
          </div>
          <Select id="countries" required={true} onChange={handleInputOnChange}>
            {country_example.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </Select>
        </div>

        {/* Date time */}
        <p>
          Date time picker we can use
          https://github.com/wojtekmaj/react-datetimerange-picker
        </p>
        <p>or we can use</p>
        {/* Date Picker */}

        {/* Alert with icon */}
        <Alert color="info">
          <span>
            <span className="font-medium">Info alert!</span> Change a few things
            up and try submitting again.
          </span>
        </Alert>

        <Alert color="failure" icon={HiInformationCircle}>
          <span>
            <span className="font-medium">Info alert!</span> Change a few things
            up and try submitting again.
          </span>
        </Alert>

        {/* Accordion */}
        <Accordion flush={true}>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
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
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        {/* Button */}
        <div className="flex flex-wrap gap-2">
          <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
          <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
          <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
          <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
          <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
          <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
          <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
        </div>

        {/* Modal */}
        <Button onClick={onClick}>Toggle modal</Button>
        <Modal show={modal} onClose={onClose}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onClick}>I accept</Button>
            <Button color="gray" onClick={onClick}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Spinner */}
        <div className="flex flex-row gap-3">
          <Button>
            <Spinner aria-label="Spinner button example" />
            <span className="pl-3">Loading...</span>
          </Button>
          <Button color="gray">
            <Spinner aria-label="Alternate spinner button example" />
            <span className="pl-3">Loading...</span>
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Spinner aria-label="Extra small spinner example" size="xs" />
          <Spinner aria-label="Small spinner example" size="sm" />
          <Spinner aria-label="Medium sized spinner example" size="md" />
          <Spinner aria-label="Large spinner example" size="lg" />
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      </Card>
      {/* End card */}
    </div>
  );
}

export default FlowbiteComponentSample;
