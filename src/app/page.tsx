export default function HomePage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-green-200"
    >
      <div
        className="container mx-auto flex flex-col items-center gap-8 px-4"
      >
        <h1 className="text-center text-6xl font-bold">
          Name Length Calculator
        </h1>
        <div className="flex gap-4">
          <a
            href="/server-side"
            className={`
              rounded-md bg-blue-600 px-6 py-3 text-lg text-white
              transition-colors hover:bg-blue-700 focus:outline-none
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            `}
          >
            Server Side Form
          </a>
          <a
            href="/client-side"
            className={`
              rounded-md bg-purple-600 px-6 py-3 text-lg text-white
              transition-colors hover:bg-purple-700 focus:outline-none
              focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
            `}
          >
            Client Side Form
          </a>
        </div>
      </div>
    </main>
  );
}
