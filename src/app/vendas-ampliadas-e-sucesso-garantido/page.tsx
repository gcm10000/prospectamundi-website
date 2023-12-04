import { Metadata } from "next";
import VendasAmpliadasSucessoGarantidoClient from "./pageClient";


export const metadata: Metadata = {
    title: 'Vendas Ampliadas e Sucesso Garantido | Prospecta Mundi',
    description: 'Descubra estratégias eficazes e práticas de vendas para impulsionar seu sucesso comercial.'
  };

function VendasAmpliadasSucessoGarantido() {
  return (
    <VendasAmpliadasSucessoGarantidoClient></VendasAmpliadasSucessoGarantidoClient>
  )
}

export default VendasAmpliadasSucessoGarantido;
