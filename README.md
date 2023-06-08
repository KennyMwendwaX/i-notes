iNotes is a Note Web App utilising [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, Create a .env file in the root directory and add a DATABASE_URL environment variable like:

```env
DATABASE_URL="postgresql://DB_USER:USER_PASSWORD@localhost:5432/DB_NAME"
```

For this to work correctly you must use a SQL Database.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on

1.  [http://localhost:3000/api/notes](http://localhost:3000/api/notes) - This api endpoint returns all the notes in the database.
2.  [http://localhost:3000/api/register](http://localhost:3000/api/register) - This api endpoint registers a new note and saves to the database.
3.  [http://localhost:3000/api/update/id](http://localhost:3000/api/update/id) - This api endpoint is used to update the selected note contents.
4.  [http://localhost:3000/api/delete/id](http://localhost:3000/api/delete/id) - This api endpoint is used to delete the selected note.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

## Technologies Used

1. [Next.js](https://nextjs.org/docs) - learn about Next.js features and API.
2. [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup..
3. [Prisma](https://www.prisma.io/) - It is a next-generation Node.js and TypeScript ORM.
4. [React Hook Form](https://react-hook-form.com/) - It provides performant, flexible and extensible forms with easy-to-use validation.
5. [date-fns](https://date-fns.org/) -It is modern JavaScript date utility library, date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.
6. [React-Icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using..
7. [next/font](https://nextjs.org/docs/basic-features/font-optimization) - to automatically optimize and load Poppins, a custom Google Font.

Your feedback and contributions are welcome!
