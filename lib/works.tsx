const GET_GRAPHQL_PROJECTS =` 
  projectId
      projectName
      projectUrl
      projectTag
      projectImageCollection(limit:1){
      	items{
          url
        }  
      }
`

//GET PORTFOLIO ITEMS API CALL
async function fetchGraphQLProjects(query: string, preview = false): Promise<any> {
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

//EXTRACT Project ENTRIES
function extractProjectEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.portofolioCollection?.items;
}

//GET ALL Project ITEMS 
export async function getAllProjectItems(): Promise<any[]> {
  const entries = await fetchGraphQLProjects(
    `query {
      portofolioCollection{
        items {
          ${GET_GRAPHQL_PROJECTS}
        }
      }
    }`
  );
  return extractProjectEntries(entries);
}