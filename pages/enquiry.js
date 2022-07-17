import Head from "next/head";
import Link from "next/link";
import { Formik, Field, Form } from "formik";
import Input from "../components/Input";
import Layout from "../components/Layout";

export default function Enquiry() {
  const registerUser = async (data) => {
    const res = await fetch(
      "https://6133cf387859e700176a37b7.mockapi.io/api/info/more",
      {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    console.log(res, "response");
  };
  return (
    <Layout>
      <div className="pt-0 flex flex-col self-center justify-center">
        <p className="text-center text-2xl">Enquiry</p>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            qualification: "",
            do: "",
            steps: "",
            interest: "",
            time: "",
            resource: "",
            last: "",
          }}
          onSubmit={async (values) => {
            //const y = await registerUser(values);
            console.log(values);
            await registerUser(values);
            alert("Thank you for your submission");
          }}
        >
          <Form>
            <div>
              <Input
                title="Name"
                htmlFor="name"
                id="lastname"
                name="name"
                placeholder=""
              />
            </div>

            <div className="flex">
              <Input
                title="Phone No"
                htmlFor="phone"
                id="phone"
                name="phone"
                placeholder=""
                type="tel"
              />
              <Input
                title="Email"
                htmlFor="email"
                id="email"
                name="email"
                placeholder=""
                type="email"
              />
            </div>

            <div className="flex">
              <Input
                title="Highest Qualification"
                htmlFor="qualification"
                id="qualification"
                name="qualification"
                placeholder=""
              />
              <Input
                title="What do you currently do?"
                htmlFor="do"
                id="do"
                name="do"
                placeholder=""
              />
            </div>

            <div>
              <Input
                title="What aspect of tech interests you?"
                htmlFor="interest"
                id="interest"
                name="interest"
                placeholder=""
              />
            </div>
            <div>
              <Input
                title="What steps have you taken on your own?"
                htmlFor="steps"
                id="steps"
                name="steps"
                placeholder=""
              />
            </div>
            <div>
              <Input
                title="How long do you want to dedicate to learning?"
                htmlFor="time"
                id="time"
                name="time"
                placeholder=""
              />
            </div>
            <div>
              <Input
                title="What resources do you need? (courses, internships or work opportunities)"
                htmlFor="resource"
                id="resource"
                name="resource"
                placeholder=""
              />
            </div>
            <div>
              <Input
                title="Is there anything else you would like to share?"
                htmlFor="last"
                id="last"
                name="last"
                placeholder=""
              />
            </div>

            <div className="pl-44">
              <button
                className="bg-indigo-700 hover:bg-indigo-500 text-white font-normal py-2 px-4"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
