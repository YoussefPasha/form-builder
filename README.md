## Getting Started

First, go to clerk to create secrets:

.env
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL="postgres://postgres:postgres@localhost:5433/formbuilder"

```

Second, bash:


```bash
npm install

docker compose up # To run postgresql

npm run dev

```