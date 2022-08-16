const { Client } = require("@notionhq/client");
console.log("env", process.env.NOTION_KEY);
const notion = new Client({ auth: process.env.NOTION_KEY });

export async function getBlogs() {
  const databaseId = "a9eea544fce04359a539b656cf1bda19";
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return response;
}
