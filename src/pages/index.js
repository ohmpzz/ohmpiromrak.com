import React from "react"

import LayoutFluid from "../components/LayoutFluid"
import PersonalSkill from "../components/PersonalSkill"
import ShortBio from "../components/ShortBio"
import SEO from "../components/SEO"

export default function Me(props) {
  return (
    <LayoutFluid>
      <SEO />
      <ShortBio />
      <PersonalSkill />
    </LayoutFluid>
  )
}
