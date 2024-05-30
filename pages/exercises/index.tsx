import React from "react";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";

const ExercisesPage: NextPage = () => {
  return <PageSection config={sectionConfigs.exercises} />;
};

export default ExercisesPage;
