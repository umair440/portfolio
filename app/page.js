"use client"

import { useState } from "react";

import ContactForm from "./componetnts/ContactForm";
import Header from "./componetnts/Header";
import ProfileOverview from "./componetnts/ProfileOverview";
import Projects from "./componetnts/Projects";
import Skills from "./componetnts/Skills";
import WorkExperience from "./componetnts/WorkExperience";

export default function Home() {

  return (
    <>
      <Header/>
      <ProfileOverview />
      <Skills />
      <Projects />
      <WorkExperience />
      <ContactForm />
    </>
  );
}
