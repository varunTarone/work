"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import ShineBorder from "./shine-border";
import { cn } from "@/utils/cn";

export function SignupForm() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "470723cc-6d52-43e4-b327-a3bae7ac6c5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    const data = response;
  };

  return (
    <ShineBorder
    className="mt-5"
    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
    <div className="rounded-xl max-w-md w-[60vw] mx-auto md:rounded-2xl p-4 md:p-2 shadow-input bg-white dark:bg-black z-10">

      <form className="my-10" onSubmit={onSubmit}>
        <div className="flex flex-col w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" name="fullname" placeholder="John Doe" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="projectmayhem@fc.com" autoComplete="on" type="email" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" name="message" placeholder="Short message..." type="text" required />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>
        
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  </ShineBorder>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
