const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

export async function getBlogs() {
  const { page_id, property_id } = await util();
  const res = await notion.pages.properties.retrieve({
    page_id: page_id,
    property_id: property_id,
  });

  return res;
}

export async function test(page_id, property_id) {
  const res = await notion.pages.properties.retrieve({
    page_id: page_id,
    property_id: property_id,
  });
  console.log(res, "china");
}

export async function util() {
  const databaseId = "a9eea544fce04359a539b656cf1bda19";
  const payload = {
    path: `databases/${databaseId}/query`,
    method: "POST",
  };
  const { results } = await notion.request(payload);

  results.map((i) => {
    test(i.id, i.properties.Link.id);
  });

  return {
    page_id: results[2].id,
    property_id: results[2].properties.Name.id,
  };
}

// export async function getBlogs() {
//   const databaseId = "a9eea544fce04359a539b656cf1bda19";
//   const payload = {
//     path: `databases/${databaseId}/query`,
//     method: "POST",
//   };
//   const { results } = await notion.request(payload);

//   return results;
// }
