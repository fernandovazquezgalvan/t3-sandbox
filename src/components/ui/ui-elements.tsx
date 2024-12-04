export function Greeting({ name }: { name?: string }) {
  return (
    <h1 className="text-6xl font-bold text-center">
      Hello {name ?? 'World'}
    </h1>
  );
}

export function NameInput() {
  return (
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      className="rounded-md border border-gray-300 p-2 text-lg focus:border-blue-500
        focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export function SubmitButton() {
  return (
    <button
      type="submit"
      className="rounded-md bg-blue-600 px-4 py-2 text-lg text-white
        transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:ring-offset-2"
    >
      Submit
    </button>
  );
}

export function ResultMessage({ message }: { message: string }) {
  if (!message) return null;
  return <p className="text-lg">{message}</p>;
}