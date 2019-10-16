import React from "react"

import LayoutFluid from "../components/LayoutFluid"
import PersonalSkill from "../components/PersonalSkill"
import ShortBio from "../components/ShortBio"

export default function Me(props) {
  return (
    <LayoutFluid>
      <ShortBio />
      <PersonalSkill />
    </LayoutFluid>
  )
}
