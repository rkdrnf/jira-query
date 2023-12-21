import fetch from "node-fetch";
import "dotenv/config";
import predicates from "./predicates.json" assert { type: "json" };

const TOKEN = process.env.TOKEN;
const JIRA_HOST = process.env.JIRA_HOST;

const apiUrl = `${JIRA_HOST}/rest/api/2/search`;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

const statements = predicates
  .reduce((c, pg) => pg.map((p) => c.map((pc) => [...pc, p])).flat(), [[]])
  .map((segments) => segments.join(" AND "));

// Make the HTTP request

async function run(statement) {
  const response = await fetch(`${apiUrl}?jql=${statement}`, { headers });
  const { maxResults, total, issues } = await response.json();

  console.log(statement);
  console.log(total);
}

for (const statement of statements) {
  run(statement);
}
