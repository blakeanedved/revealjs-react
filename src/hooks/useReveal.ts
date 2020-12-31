import { useContext } from "react";
import { RevealContext } from "../components/RevealProvider";

export default function useReveal() {
  return useContext(RevealContext);
}