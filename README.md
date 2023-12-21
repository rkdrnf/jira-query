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
