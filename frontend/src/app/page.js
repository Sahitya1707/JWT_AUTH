import Button from "./components/Button";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <main className=" w-[100%] h-[100vh] bg-gradient-to-r from-[#565655] flex justify-center items-center flex-col gap-y-10">
      <Heading text={"Welcome to JWT Login/Signup"} shadowColor={"yellow"} />
      <section className=" flex gap-x-4 ">
        <Button text="login" shadowColor={"green"} />
        <Button text={"sign up"} shadowColor={"purple"} />
      </section>
    </main>
  );
}
