# Simple issue count query for jira

To query the number of issues by every combination of below conditions,

- by assignee
- by priority `>= high`, `== medium`, `<= low``
- by type `Story`, `Bug`

set `predicates.json` as

```json
[
  ["assignee in (jhahn)"],
  ["priority >= High", "priority = Medium", "priority <= Low"],
  ["type = Story", "type = Bug"]
]
```

Query results are displayed as below

```
assignee in (jhahn) AND priority = Medium AND type = Bug
0
assignee in (jhahn) AND priority >= High AND type = Story
0
assignee in (jhahn) AND priority <= Low AND type = Bug
0
assignee in (jhahn) AND priority >= High AND type = Bug
0
assignee in (jhahn) AND priority <= Low AND type = Story
1
assignee in (jhahn) AND priority = Medium AND type = Story
7
```

# Getting started

1. Install latest node

2. Install dependencies

```
npm i
```

3. Create your `predicates.json` and `.env` file following `Settings` section.

4. Run query

```
npm start
```

# Settings

Create `predicates.json` and `.env` fitting your needs from its respective example file `predicates.example.json`, `.env.example`.

Every predicates in predicates.json are concanated with `AND` condition

```
[
    [A],
    [B, C],
    [D, E]
]
```

results below query statements.

- A and B and D
- A and B and E
- A and C and D
- A and C and E
