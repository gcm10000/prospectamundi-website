import { Metadata } from "next";
import AboutLayout from "./layout";

export const metadata: Metadata = {
  title: 'Sobre | Prospecta Mundi',
  description: 'Comprometidos com soluções inovadoras e excelência, impulsionando negócios e prontos para contribuir com o desenvolvimento da sua empresa.'
};

function About() {
  return (
    <AboutLayout></AboutLayout>
  )
}

export default About;