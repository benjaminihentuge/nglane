This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# NGLane - Next.js Project with MongoDB

This project is a Next.js application using MongoDB as the database.

## Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root of your project and add:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/nglane?retryWrites=true&w=majority
```

Replace `<username>`, `<password>`, and `<cluster-name>` with your actual MongoDB credentials.

### 4. Run the Development Server
Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 5. MongoDB Connection
The app connects to MongoDB using a connection helper (`dbConnect.ts`). It ensures a single instance of the MongoDB client across API requests, improving performance.

### 6. Folder Structure
- `lib/dbConnect.ts`: Handles MongoDB connection.
- `pages/api`: Contains API routes.

### 7. Dependencies
- `mongoose`: Used to interact with MongoDB.

