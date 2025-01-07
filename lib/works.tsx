const GET_GRAPHQL_PROJECTS =` 
  navName
  navLink
  navAlt
  navImage{
    url
  }
`

//GET PORTFOLIO ITEMS API CALL
async function fetchGraphQLMenu(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["portofolio"] },
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

//EXTRACT MENU ENTRIES
function extractProjectEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.menuItemsCollection?.items;
}

//GET ALL MENU ITEMS 
export async function getAllProjectItems(): Promise<any[]> {
  const entries = await fetchGraphQLMenu(
    `query {
      menuItemsCollection{
        items {
          ${GET_GRAPHQL_PROJECTS}
        }
      }
    }`
  );
  return extractProjectEntries(entries);
}