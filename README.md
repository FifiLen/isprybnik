# ISP Rybnik - Studia Podyplomowe

This is a [Next.js](https://nextjs.org/) project for ISP Rybnik, built with TypeScript, Tailwind CSS, and Appwrite.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd studia
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up environment variables:
    - Copy `.env.example` to `.env.local`:
      ```bash
      cp .env.example .env.local
      ```
    - Fill in the values in `.env.local` with your Appwrite configuration.

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Runs the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run knip`: Checks for unused files and dependencies.

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend/Database**: Appwrite
- **Internationalization**: next-intl
- **Forms**: React Hook Form, Zod
- **Animations**: Framer Motion

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
