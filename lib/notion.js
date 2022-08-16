const { Client } = require("@notionhq/client");

// export async function getBlogs() {
//   console.log("boom");
//   const notion = new Client({
//     auth: "secret_21frtEJUtkC6CKXqAaqIRrCLYIP1chGoHGhkRBRMg1I",
//   });
//   const databaseId = "2a015f1fb4b44a06bf04fbd813973378";
//   const response = await notion.databases.retrieve({
//     database_id: databaseId,
//   });

//   return response;
// }

export async function getBlogs() {
  console.log("boom");
  const notion = new Client({
    auth: "secret_3QeIiP4u0S5NcgyxrQ4elCklmeQvYi83uwKS1t4EIcT",
  });
  const databaseId = "a9eea544fce04359a539b656cf1bda19";
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return response;
}

// export async function getBlogs() {
//   console.log("boom");
//   const notion = new Client({
//     auth: "secret_3QeIiP4u0S5NcgyxrQ4elCklmeQvYi83uwKS1t4EIcT",
//   });
//   const pageid = "989976d6-a3c9-44a4-a554-393cf93cdb96";
//   const propertyid = "he%3C%5E";
//   const response = await notion.pages.properties.retrieve({
//     page_id: pageid,
//     property_id: propertyid,
//   });

//   return response;
// }
