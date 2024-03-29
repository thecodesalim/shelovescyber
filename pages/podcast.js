import Layout from "../components/Layout";
import { Card } from "../components/Card";

export default function Blog() {
  return (
    <Layout>
      <div className="pt-10">
        <p className="text-center text-2xl">SheLovesFatimah Podcast</p>
        <p className="text-center text-violet-700">
          I host FatimahLovesCyber where I sit down
        </p>
        <p className="text-center text-violet-700">
          and talk with other Cybersecurity Professional
        </p>
        <p className="text-center text-violet-700">around the world.</p>
        <div className="pt-10 flex justify-center ">
          <div className="flex-col ">
            <Card
              guest="By Fatimah Adelodun"
              link="https://anchor.fm/fatimah-adelodun/episodes/Celebrating-Women-In-Cybersecurity-with-Aastha-Sahni-e1m9o9g"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
