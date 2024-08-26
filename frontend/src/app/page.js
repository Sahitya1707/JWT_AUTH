import Button from "./components/Button";

export default function Home() {
  return (
    <main className=" w-[100%] h-[100vh] flex justify-center items-center gap-x-4 bg-gradient-to-r from-[#565655]">
      <Button text="login" shadowColor={"green"} />
      <Button text={"sign up"} shadowColor={"purple"} />
    </main>
  );
}
