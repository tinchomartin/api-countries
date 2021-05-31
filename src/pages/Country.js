import React from "react";
import { useParams } from "react-router-dom";

export default function Country() {
  let { country } = useParams();

  return <div>{country}</div>;
}
