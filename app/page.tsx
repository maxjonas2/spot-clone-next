"use client";

import { redirect } from "next/navigation";

// eslint-disable-next-line react/display-name

// This is the index
const RootPage : React.FC = () => {
  redirect('/artists');
}

export default RootPage;