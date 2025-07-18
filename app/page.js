"use client"

import { useState } from "react";
import ContactForm from "./componetnts/ContactForm";
import Header from "./componetnts/Header";
import ProfileOverview from "./componetnts/ProfileOverview";
import Projects from "./componetnts/Projects";
import Skills from "./componetnts/Skills";
import WorkExperience from "./componetnts/WorkExperience";

export default function Home() {
    const [activeSession, setActiveSession] = useState("home");
  return (
    <>
      <Header activeSession = {activeSession} setActiveSession ={setActiveSession}/>
      <ProfileOverview ctiveSession = {activeSession}/>
      <Skills ctiveSession = {activeSession}/>
      <Projects ctiveSession = {activeSession}/>
      <WorkExperience ctiveSession = {activeSession}/>
      <ContactForm ctiveSession = {activeSession}/>
    </>
  );
}
