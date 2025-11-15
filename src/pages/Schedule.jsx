import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
import ProgramSchedule from "../components/ProgramSchedule";

function Schedule() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <ProgramSchedule/>
    </main>
  );
}

export default Schedule;
