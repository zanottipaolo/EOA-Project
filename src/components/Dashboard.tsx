import { Dialog, Transition } from "@headlessui/react"
import { FormEvent, Fragment, useEffect, useState } from "react"
import jsPDF from "jspdf"
import { VscFilePdf } from "react-icons/vsc"
import { MdOutlineFormatClear } from "react-icons/md"

const Dashboard = () => {
  // Hook
  const [isOpen, setIsOpen] = useState(false)

  const [closeAccountingCheck, setCloseAccountingCheck] = useState(false)

  const [preBuiltCheck, setPreBuiltCheck] = useState(true)

  const [assetsItem, setAssetsItem] = useState(
    JSON.parse(localStorage.getItem("assetsItem")!) ?? [
      {
        name: "a-credito-verso-soci",
        label: "A) Credito verso soci",
        amount: 40000,
      },
      {
        name: "b-immobilizzazioni",
        label: "B) Immobilizzazioni",
        amount: null,
      },
      {
        name: "b-i-immobilizzazioni-immateriali",
        label: "B. I) Immobilizzazioni immateriali",
        amount: 750000,
      },
      {
        name: "b-ii-immobilizzazioni-materiali",
        label: "B. II) Immobilizzazioni materiali",
        amount: 100000,
      },
      {
        name: "b-iii-immobilizzazioni-finanziarie",
        label: "B. III) Immobilizzazioni finanziarie",
        amount: 80000,
      },
      {
        name: "c-attivo-circolante",
        label: "C) Attivo circolante",
        amount: null,
      },
      {
        name: "c-i-rimanenze",
        label: "C. I) Rimanenze",
        amount: null,
      },
      {
        name: "c-i-1-materie-prime",
        label: "C. I. 1) Materie prime",
        amount: 20000,
      },
      {
        name: "c-i-4-prodotti-finiti",
        label: "C. I. 4) Prodotti finiti",
        amount: 50000,
      },
      {
        name: "c-ii-crediti",
        label: "C. II) Crediti",
        amount: null,
      },
      {
        name: "c-i-1-verso-clienti",
        label: "C. I. 1) Verso clienti",
        amount: 0,
      },
      {
        name: "c-ii-2-verso-imprese",
        label: "C. II. 2) Verso imprese",
        amount: 55000,
      },
      {
        name: "c-iii-attività-finanziarie",
        label: "C. III) Attività finanziarie",
        amount: null,
      },
      {
        name: "c-iii-1-partecipazioni-in-imprese-controllate",
        label: "C. III. 1) Partecipazioni in imprese controllate",
        amount: 0,
      },
      {
        name: "c-iv-cassa",
        label: "C. IV) Cassa",
        amount: 150000,
      },
      {
        name: "d-ratei-e-risconti-attivi",
        label: "D) Ratei e Risconti attivi",
        amount: 5000,
      },
    ]
  )
  const [liabilitiesItem, setLiabilitiesItem] = useState(
    JSON.parse(localStorage.getItem("liabilitiesItem")!) ?? [
      {
        name: "a-patrimonio-netto",
        label: "A) Patrimonio netto",
        amount: null,
      },
      {
        name: "a-i-capitale-sociale",
        label: "A. I) Capitale sociale",
        amount: 500000,
      },
      {
        name: "a-ii-riserve",
        label: "A. II) Riserve",
        amount: 195000,
      },
      {
        name: "a-ix-utili-esercizio",
        label: "A. IX) Utili dell'esercizio",
        amount: 0,
      },
      {
        name: "b-fondo-rischi-oneri",
        label: "B) Fondo Rischi e oneri",
        amount: null,
      },
      {
        name: "b-ii-imposte",
        label: "B. II) Imposte (IRES 24%, IRAP 3,9%)",
        amount: 0,
      },
      {
        name: "c-tfr",
        label: "C) TFR",
        amount: 150000,
      },
      {
        name: "d-debiti",
        label: "D) Debiti",
        amount: null,
      },
      {
        name: "d-3-finanziari",
        label: "D. 3) Finanziari",
        amount: null,
      },
      {
        name: "d-3-1-debiti-bp",
        label: "D. 3. 1) Debiti BP",
        amount: 55000,
      },
      {
        name: "d-3-2-debiti-lp",
        label: "D. 3. 2) Debiti LP",
        amount: 350000,
      },
      {
        name: "d-6-verso-fornitori",
        label: "D. 6) Verso fornitori",
        amount: 0,
      },
      {
        name: "d-13-altri-debiti",
        label: "D. 13) Altri debiti",
        amount: 0,
      },
      {
        name: "e-ratei-risconti-passivi",
        label: "E) Ratei e risconti passivi",
        amount: 0,
      },
    ]
  )
  const [incomeItems, setIncomeItems] = useState(
    JSON.parse(localStorage.getItem("incomeItems")!) ?? [
      {
        name: "a-valore-della-produzione",
        label: "A) Valore della produzione",
        amount: null,
      },
      {
        name: "a-1-ricavi-dalle-vendite",
        label: "A. 1) Ricavi dalle vendite",
        amount: 0,
      },
      {
        name: "a-2-variazioni-prodotti",
        label: "A. 2) Variazioni prodotti",
        amount: 0,
      },
      {
        name: "b-costi-della-produzione",
        label: "B) Costi della produzione",
        amount: null,
      },
      {
        name: "b-6-costi-materie-prime",
        label: "B. 6) Costi materie prime",
        amount: 0,
      },
      {
        name: "b-7-servizi",
        label: "B. 7) Servizi",
        amount: 0,
      },
      {
        name: "b-8-godimento-beni-terzi",
        label: "B. 8) Godimento beni terzi",
        amount: 0,
      },
      {
        name: "b-9-costo-personale",
        label: "B. 9) Costo per il personale",
        amount: 0,
      },
      {
        name: "b-10-ammortamenti-svalutazioni",
        label: "B. 10) Ammortamenti e svalutazioni",
        amount: null,
      },
      {
        name: "b-10-a-immobilizzazioni-immateriali",
        label: "B. 10. a) Immobilizzazioni immateriali",
        amount: 0,
      },
      {
        name: "b-10-b-immobilizzazioni-materiali",
        label: "B. 10. b) Immobilizzazioni materiali",
        amount: 0,
      },
      {
        name: "b-10-d-svalutazione-crediti",
        label: "B. 10. d) Svalutazione dei crediti",
        amount: 0,
      },
      {
        name: "b-11-variazione-rimanenze-mp",
        label: "B. 11) Variazione rimanenze MP",
        amount: 0,
      },
      {
        name: "b-12-accantonamento-per-rischi",
        label: "B. 12) Accantonamento per rischi",
        amount: 0,
      },
      {
        name: "b-14-oneri-diversi",
        label: "B. 14) Oneri diversi",
        amount: 0,
      },
      {
        name: "c-proventi-oneri",
        label: "C) Proventi e oneri",
        amount: null,
      },
      {
        name: "c-15-proventi-partecipazioni",
        label: "C. 15) Proventi da partecipazioni",
        amount: 0,
      },
      {
        name: "c-17-interessi-altri-oneri",
        label: "C. 17) Interessi e altri oneri",
        amount: 0,
      },
      {
        name: "d-rettifiche-di-valore",
        label: "D) Rettifiche di valore",
        amount: null,
      },
      {
        name: "d-18-rivalutazioni",
        label: "D. 18) Rivalutazioni",
        amount: 0,
      },
      {
        name: "d-19-svalutazioni",
        label: "D. 19) Svalutazioni",
        amount: 0,
      },
    ]
  )

  const [type1, setCustomType1] = useState("")
  const [type2, setCustomType2] = useState("")
  const [type3, setCustomType3] = useState("")
  const [type4, setCustomType4] = useState("")

  // save new data on localstorage
  useEffect(() => {
    localStorage.setItem("assetsItem", JSON.stringify(assetsItem))
  }, [assetsItem])

  useEffect(() => {
    localStorage.setItem("liabilitiesItem", JSON.stringify(liabilitiesItem))
  }, [liabilitiesItem])

  useEffect(() => {
    localStorage.setItem("incomeItems", JSON.stringify(incomeItems))
  }, [incomeItems])

  // Data
  const customData1 = [
    { item: assetsItem, category: "assets" },
    { item: liabilitiesItem, category: "liabilities" },
    { item: incomeItems, category: "income" },
  ]
  const customData2 = [
    { item: assetsItem, category: "assets" },
    { item: liabilitiesItem, category: "liabilities" },
    { item: incomeItems, category: "income" },
  ]
  const customData3 = [
    { item: assetsItem, category: "assets" },
    { item: liabilitiesItem, category: "liabilities" },
    { item: incomeItems, category: "income" },
  ]
  const customData4 = [
    { item: assetsItem, category: "assets" },
    { item: liabilitiesItem, category: "liabilities" },
    { item: incomeItems, category: "income" },
  ]

  const preBuiltOp = [
    {
      name: "acquistoMateriale",
      label: "Acquisto materiale",
    },
    {
      name: "venditaProdotti",
      label: "Vendita di prodotti",
    },
    {
      name: "pagaStipendi",
      label: "Paga gli stipendi",
    },
    {
      name: "tfr",
      label: "Accantonamento TFR",
    },
    {
      name: "costoServizi",
      label: "Costo dei servizi (corrente, ...)",
    },
    {
      name: "proventiFinanziari",
      label: "Proventi finanziari",
    },
    {
      name: "variazioneMP",
      label: "Variazione materie prime in magazzino",
    },
    {
      name: "variazionePF",
      label: "Variazione prodotti finiti in magazzino",
    },
  ]

  // Function
  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    // soldi che ho in cassa
    const cassaAmount = assetsItem.find(
      (item: { name: string }) => item.name === "c-iv-cassa"
    )?.amount

    if (
      event.target.preBuiltOpValue.value != "" &&
      event.target.prebuilt.value != "Operation" &&
      event.target.opRadio[0].checked
    ) {
      switch (event.target.prebuilt.value) {
        case "acquistoMateriale":
          // Ho il valore in DARE nel B.6 del conto economico
          let newCostiMP = incomeItems.map((item) =>
            item.name === "b-6-costi-materie-prime"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // Pareggio mettendo in avere il valore in D.6 dello sp passivo
          // non metto subito l'uscita di cassa ma prima apro il debito con il fornitore,
          // che pagherò successivamente
          let newDebitiVersoFornitori = liabilitiesItem.map((item) =>
            item.name === "d-6-verso-fornitori"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // se ho i soldi in cassa pago il fornitore, altrimenti rimane aperto il debito
          if (cassaAmount! >= event.target.preBuiltOpValue.value) {
            // Ora pago i fornitori e quindi ho in dare nello SP passivo la spesa
            // pareggio poi con l'uscita di cassa
            newDebitiVersoFornitori = newDebitiVersoFornitori.map((item) =>
              item.name === "d-6-verso-fornitori"
                ? {
                    ...item,
                    amount:
                      item.amount! - Number(event.target.preBuiltOpValue.value),
                  }
                : item
            )

            // ho l'uscita di cassa per pagare i fornitori
            let newCassa = assetsItem.map((item) =>
              item.name === "c-iv-cassa"
                ? {
                    ...item,
                    amount:
                      item.amount! - Number(event.target.preBuiltOpValue.value),
                  }
                : item
            )

            setAssetsItem(newCassa)
          }

          setIncomeItems(newCostiMP)
          setLiabilitiesItem(newDebitiVersoFornitori)

          break

        case "venditaProdotti":
          // Mi aumenta l'avere nel conto economico A.1 ricavi da vendita
          let newRicaviPF = incomeItems.map((item) =>
            item.name === "a-1-ricavi-dalle-vendite"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // Pareggio con il credito verso soci
          let newCreditoVersoSoci = assetsItem.map((item) =>
            item.name === "c-i-1-verso-clienti"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // il credito mi viene pagato
          newCreditoVersoSoci = newCreditoVersoSoci.map((item) =>
            item.name === "c-i-1-verso-clienti"
              ? {
                  ...item,
                  amount:
                    item.amount! - Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // pareggio con l'aumenti in cassa
          let newCassaSA = newCreditoVersoSoci.map((item) =>
            item.name === "c-iv-cassa"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          setIncomeItems(newRicaviPF)
          setAssetsItem(newCassaSA)

          break

        case "pagaStipendi":
          // Ho in dare il costo del personale nel conto economico (mi aumenta)
          let newCEpersonale = incomeItems.map((item) =>
            item.name === "b-9-costo-personale"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // pareggio mettendo in avere il debito nello stato patrimoniale passivo altri debiti
          let newSPdebiti = liabilitiesItem.map((item) =>
            item.name === "d-13-altri-debiti"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // se ho i soldi in cassa pago i dipendenti e risolvo il debito
          if (cassaAmount! >= event.target.preBuiltOpValue.value) {
            // tolgo il debito con i dipendenti
            newSPdebiti = newSPdebiti.map((item) =>
              item.name === "d-13-altri-debiti"
                ? {
                    ...item,
                    amount:
                      item.amount! - Number(event.target.preBuiltOpValue.value),
                  }
                : item
            )

            // pareggio con l'uscita di cassa
            let newSAcassa = assetsItem.map((item) =>
              item.name === "c-iv-cassa"
                ? {
                    ...item,
                    amount:
                      item.amount! - Number(event.target.preBuiltOpValue.value),
                  }
                : item
            )

            setAssetsItem(newSAcassa)
          }

          setIncomeItems(newCEpersonale)
          setLiabilitiesItem(newSPdebiti)

          break

        case "tfr":
          // accantono il tfr, ho in avere nel C dello stato patrimoniale passivo
          let newTFRsp = liabilitiesItem.map((item) =>
            item.name === "c-tfr"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // pareggio mettendolo come costo del personale nel conto economico
          let newSPperosnale = incomeItems.map((item) =>
            item.name === "b-9-costo-personale"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          setLiabilitiesItem(newTFRsp)
          setIncomeItems(newSPperosnale)

          break

        case "costoServizi":
          // Metto nel dare la voce nel conto economico (B.7, costo dei servizi)
          let newCostiCE = incomeItems.map((item) =>
            item.name === "b-7-servizi"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // pareggio creando un debito con il fornitore nello stato patrimoniale passivo
          let newSPdebitoFornitore = liabilitiesItem.map((item) =>
            item.name === "d-6-verso-fornitori"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // se ho i soldi in cassa allora pago i fornitori
          if (cassaAmount! >= event.target.preBuiltOpValue.value) {
            // ho in avere il debito di primo, quindi lo azzero
            newSPdebitoFornitore = newSPdebitoFornitore.map((item) =>
              item.name === "d-6-verso-fornitori"
                ? {
                    ...item,
                    amount:
                      item.amount! - Number(event.target.preBuiltOpValue.value),
                  }
                : item
            )

            // pareggio pagando con la cassa
            let newCassaStatoSA = assetsItem.map((item) =>
              item.name === "c-iv-cassa"
                ? {
                    ...item,
                    amount:
                      item.amount! - Number(event.target.preBuiltOpValue.value),
                  }
                : item
            )

            setAssetsItem(newCassaStatoSA)
          }

          setIncomeItems(newCostiCE)
          setLiabilitiesItem(newSPdebitoFornitore)
          break

        case "proventiFinanziari":
          // Messo nel dare del conto economico, C.15
          let newCEProventi = incomeItems.map((item) =>
            item.name === "c-15-proventi-partecipazioni"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // pareggio andando ad aumentare la cassa
          let newCassaStatoSA = assetsItem.map((item) =>
            item.name === "c-iv-cassa"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          setIncomeItems(newCEProventi)
          setAssetsItem(newCassaStatoSA)

          break

        case "variazioneMP":
          // aumento la variazione di materie prime nel conto economico (costo)
          let newCEvarMP = incomeItems.map((item) =>
            item.name === "b-11-variazione-rimanenze-mp"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value) >
                    0
                      ? -Number(event.target.preBuiltOpValue.value)
                      : Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // pareggio mettendo le nuove scorte nell'attivo circolante dello stato patrimoniale
          let newSPAscorteMP = assetsItem.map((item) =>
            item.name === "c-i-1-materie-prime"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          setIncomeItems(newCEvarMP)
          setAssetsItem(newSPAscorteMP)
          break

        case "variazionePF":
          // aumento la variazione di prodotti finiti nel conto economico (ricavo)
          let newCEvarPF = incomeItems.map((item) =>
            item.name === "a-2-variazioni-prodotti"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          // pareggio mettendo le nuove scorte nell'attivo circolante dello stato patrimoniale
          let newSPAscortePF = assetsItem.map((item) =>
            item.name === "c-i-4-prodotti-finiti"
              ? {
                  ...item,
                  amount:
                    item.amount! + Number(event.target.preBuiltOpValue.value),
                }
              : item
          )

          setIncomeItems(newCEvarPF)
          setAssetsItem(newSPAscortePF)
          break
      }
      closeModal()
    } else if (event.target.opRadio[1].checked) {
      // se c'è pareggio allora aggiorno i dati
      // = le categorie che modifico devono avere lo stesso importo
      if (
        Number(event.target.type1[2].value) -
          Number(event.target.type1[3].value) +
          (Number(event.target.type2[2].value) -
            Number(event.target.type2[3].value)) +
          (Number(event.target.type3[2].value) -
            Number(event.target.type3[3].value)) +
          (Number(event.target.type4[2].value) -
            Number(event.target.type4[3].value)) ===
        0
      ) {
        let newAssestsCustom = assetsItem
        let newLiabilitiesCustom = liabilitiesItem
        let newIncomeCustom = incomeItems

        switch (event.target.type1[0].value) {
          case "assets":
            newAssestsCustom = newAssestsCustom.map((item) =>
              item.name === event.target.type1[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type1[2].value) -
                        Number(event.target.type1[3].value)),
                  }
                : item
            )
            break
          case "liabilities":
            newLiabilitiesCustom = newLiabilitiesCustom.map((item) =>
              item.name === event.target.type1[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type1[3].value) -
                        Number(event.target.type1[2].value)),
                  }
                : item
            )
            break
          case "income":
            newIncomeCustom = newIncomeCustom.map((item) =>
              item.name === event.target.type1[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      Math.abs(
                        Number(event.target.type1[2].value) -
                          Number(event.target.type1[3].value)
                      ),
                  }
                : item
            )
            break
        }

        switch (event.target.type2[0].value) {
          case "assets":
            newAssestsCustom = newAssestsCustom.map((item) =>
              item.name === event.target.type2[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type2[2].value) -
                        Number(event.target.type2[3].value)),
                  }
                : item
            )
            break
          case "liabilities":
            newLiabilitiesCustom = newLiabilitiesCustom.map((item) =>
              item.name === event.target.type2[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type2[3].value) -
                        Number(event.target.type2[2].value)),
                  }
                : item
            )
            break
          case "income":
            newIncomeCustom = newIncomeCustom.map((item) =>
              item.name === event.target.type2[1].value
                ? {
                    ...item,
                    amount: Math.abs(
                      Number(event.target.type2[2].value) -
                        Number(event.target.type2[3].value)
                    ),
                  }
                : item
            )
            break
        }

        switch (event.target.type3[0].value) {
          case "assets":
            newAssestsCustom = newAssestsCustom.map((item) =>
              item.name === event.target.type3[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type3[2].value) -
                        Number(event.target.type3[3].value)),
                  }
                : item
            )
            break
          case "liabilities":
            newLiabilitiesCustom = newLiabilitiesCustom.map((item) =>
              item.name === event.target.type3[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type3[3].value) -
                        Number(event.target.type3[2].value)),
                  }
                : item
            )
            break
          case "income":
            newIncomeCustom = newIncomeCustom.map((item) =>
              item.name === event.target.type3[1].value
                ? {
                    ...item,
                    amount: Math.abs(
                      Number(event.target.type3[2].value) -
                        Number(event.target.type3[3].value)
                    ),
                  }
                : item
            )
        }

        switch (event.target.type4[0].value) {
          case "assets":
            newAssestsCustom = newAssestsCustom.map((item) =>
              item.name === event.target.type4[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type4[2].value) -
                        Number(event.target.type4[3].value)),
                  }
                : item
            )
            break
          case "liabilities":
            newLiabilitiesCustom = newLiabilitiesCustom.map((item) =>
              item.name === event.target.type4[1].value
                ? {
                    ...item,
                    amount:
                      item.amount! +
                      (Number(event.target.type4[3].value) -
                        Number(event.target.type4[2].value)),
                  }
                : item
            )
            break
          case "income":
            newIncomeCustom = newIncomeCustom.map((item) =>
              item.name === event.target.type4[1].value
                ? {
                    ...item,
                    amount: Math.abs(
                      Number(event.target.type4[2].value) -
                        Number(event.target.type4[3].value)
                    ),
                  }
                : item
            )
            break
        }

        setAssetsItem(newAssestsCustom)
        setLiabilitiesItem(newLiabilitiesCustom)
        setIncomeItems(newIncomeCustom)

        closeModal()
      }
    }
  }

  // Load custom operation based on category
  const loadCustomData = (event: FormEvent<HTMLSelectElement>) => {
    switch (event.target.name) {
      case "type1":
        setCustomType1(event.target.value)
        break
      case "type2":
        setCustomType2(event.target.value)
        break
      case "type3":
        setCustomType3(event.target.value)
        break
      case "type4":
        setCustomType4(event.target.value)
        break
    }
  }

  // Checkbox to set if the accounting is close (and calculate taxes)
  const closeAccounting = () => {
    setCloseAccountingCheck(!closeAccountingCheck)

    // calculate taxes
    const ricaviAmount = incomeItems
      .filter((item) => item.name[0] === "a")
      .reduce((acc, item) => acc + (item.amount != null ? item.amount : 0), 0)

    const costiAmount = incomeItems
      .filter((item) => item.name[0] === "b")
      .reduce((acc, item) => acc + (item.amount != null ? item.amount : 0), 0)

    const costoPersonale = incomeItems
      .filter((item) => item.name[0] === "b-9")
      .reduce((acc, item) => acc + (item.amount != null ? item.amount : 0), 0)

    const proventiAmount = incomeItems
      .filter((item) => item.name[0] === "c")
      .reduce((acc, item) => acc + (item.amount != null ? item.amount : 0), 0)

    const rettificheAmount = incomeItems
      .filter((item) => item.name[0] === "d")
      .reduce((acc, item) => acc + (item.amount != null ? item.amount : 0), 0)

    const MON = ricaviAmount - costiAmount

    const VAN = MON + costoPersonale
    const VAI = MON - proventiAmount + rettificheAmount

    // se il VAI è negativo non colacolo le imposte
    const IRAP = VAI > 0 ? (3.9 * VAN) / 100 : 0
    const IRES = VAI > 0 ? (24 * VAI) / 100 : 0

    const utileNetto = VAI - IRAP - IRES

    // aggiungo le imposte nuove
    let newCEtax = liabilitiesItem.map((item) =>
      item.name === "b-ii-imposte"
        ? {
            ...item,
            amount: IRAP + IRES,
          }
        : item
    )

    // aggiorno l'utile di esercizio
    newCEtax = newCEtax.map((item) =>
      item.name === "a-ix-utili-esercizio"
        ? {
            ...item,
            amount: utileNetto,
          }
        : item
    )

    setLiabilitiesItem(newCEtax)
  }

  // remove saved items from localstorage
  const clearData = () => {
    localStorage.removeItem("assetsItem")
    localStorage.removeItem("liabilitiesItem")
    localStorage.removeItem("incomeItems")

    // ricarico la pagina per applicare le modifiche
    location.reload()
  }

  const createPDF = () => {
    const doc = new jsPDF({
      format: "a1",
      unit: "pt",
      orientation: "p",
      compress: true
    })

    doc.html(document.getElementById("balance")!, {
      async callback(doc) {
        await doc.save("balance-sheet")
      },
    })
  }

  return (
    <div className='flex flex-col items-center justify-center py-5'>
      {/* Pulsanti */}
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-x-5 my-5 items-center'>
          <div className='flex justify-center gap-2'>
            {/* Add Item */}
            <button
              type='button'
              onClick={openModal}
              className='font-bold uppercase mt-5 rounded-lg bg-teal-600 p-3 hover:bg-teal-700 disabled:bg-gray-300 transition-colors text-white shadow-md'
              disabled={closeAccountingCheck ? true : false}
            >
              new transaction
            </button>

            {/* Clear */}
            <button
              disabled={closeAccountingCheck ? true : false}
              type='button'
              onClick={clearData}
              className='transition-colors items-center font-bold uppercase mt-5 rounded-lg bg-red-400 p-3 hover:bg-red-500 disabled:bg-gray-300 text-white shadow-md flex justify-center'
            >
              <MdOutlineFormatClear className='w-6 h-6 ' />
            </button>
          </div>

          {/* Download PDF */}
          <button
            type='button'
            onClick={createPDF}
            className='font-bold mt-5 flex gap-x-3 rounded-lg bg-red-400 p-3 hover:bg-red-500 disabled:bg-gray-300 transition-colors text-white shadow-md'
            disabled={!closeAccountingCheck ? true : false}
          >
            DOWNLOAD PDF
            <VscFilePdf className='text-white h-6 w-6' />
          </button>
        </div>

        <div className='p-5 md;p-0'>
          <input
            type='checkbox'
            name='closeBalance'
            id='close-balance'
            className='mr-2'
            onChange={closeAccounting}
          />
          <label htmlFor='close-balance'>
            Close accounting (and calculate current taxes)
          </label>
        </div>
      </div>

      {/* Tables */}
      <div
        id='balance'
        className='w-full flex flex-col justify-center items-center'
      >
        {/* Stato patrimoniale */}
        <div className='mt-16 w-full px-4 md:px-16'>
          <h2 className='font-bold text-2xl'>Balance sheet</h2>
          <div className='flex flex-col md:flex-row gap-y-10 md:justify-around'>
            {/* Attivo */}
            <div className='overflow-x-auto md:p-12 w-full'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-5'>
                <h3 className='font-bold text-xl'>Assets</h3>
                <p className='font-bold text-base'>
                  Total:{" "}
                  <span className='text-teal-600'>
                    {new Intl.NumberFormat("it-IT").format(
                      assetsItem.reduce(
                        (acc, item) =>
                          acc + (item.amount != null ? item.amount : 0),
                        0
                      )
                    )}
                  </span>
                </p>
              </div>
              <table
                className={`min-w-full divide-y-2 divide-gray-200 text-sm ${
                  closeAccountingCheck
                    ? "text-gray-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                <tbody className='divide-y divide-gray-200'>
                  {assetsItem.map((asset) => (
                    <tr key={asset.name}>
                      <td className='whitespace-nowrap px-4 py-2 font-medium'>
                        <p
                          className={`${
                            asset.amount != null ? "" : "font-bold"
                          }`}
                        >
                          {asset.label}
                        </p>
                      </td>
                      <td className='whitespace-nowrap px-4 py-2'>
                        <p className='text-center'>
                          {asset.amount != null
                            ? new Intl.NumberFormat("it-IT").format(
                                asset.amount
                              )
                            : ""}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Passivo */}
            <div className='overflow-x-auto md:p-12 w-full'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-5'>
                <h3 className='font-bold text-xl'>Liabilities</h3>
                <p className='font-bold text-base'>
                  Total:{" "}
                  <span className='text-teal-600'>
                    {new Intl.NumberFormat("it-IT").format(
                      liabilitiesItem.reduce(
                        (acc, item) =>
                          acc + (item.amount != null ? item.amount : 0),
                        0
                      )
                    )}
                  </span>
                </p>
              </div>
              <table
                className={`min-w-full divide-y-2 divide-gray-200 text-sm ${
                  closeAccountingCheck
                    ? "text-gray-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                <tbody className='divide-y divide-gray-200'>
                  {liabilitiesItem.map((liabilities) => (
                    <tr key={liabilities.name}>
                      <td className='whitespace-nowrap px-4 py-2 font-medium'>
                        <p
                          className={`${
                            liabilities.amount != null ? "" : "font-bold"
                          }`}
                        >
                          {liabilities.label}
                        </p>
                      </td>
                      <td className='whitespace-nowrap px-4 py-2'>
                        <p className='text-center'>
                          {liabilities.amount != null
                            ? new Intl.NumberFormat("it-IT").format(
                                liabilities.amount
                              )
                            : ""}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Conto economico */}
        <div className='mt-10 w-full px-4 md:px-16'>
          <h2 className='font-bold text-2xl'>Income statement</h2>

          <div className='overflow-x-auto md:p-12 w-full md:w-1/2 md:m-auto'>
            <table
              className={`min-w-full divide-y-2 divide-gray-200 text-sm ${
                closeAccountingCheck
                  ? "text-gray-400"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              <tbody className='divide-y divide-gray-200'>
                {incomeItems.map((income) => (
                  <tr key={income.name}>
                    <td className='whitespace-nowrap px-4 py-2 font-medium'>
                      <p
                        className={`${
                          income.amount != null ? "" : "font-bold"
                        }`}
                      >
                        {income.label}
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <p className='text-center'>
                        {income.amount != null
                          ? new Intl.NumberFormat("it-IT").format(income.amount)
                          : ""}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modale */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900 dark:text-white'
                  >
                    Transaction information
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    {/* Pre-built  */}
                    <div>
                      <input
                        type='radio'
                        name='opRadio'
                        id='preBuiltRadioID'
                        className='peer hidden [&:checked_+_label_svg]:block'
                        onChange={() => setPreBuiltCheck(true)}
                        checked={preBuiltCheck}
                      />
                      <label
                        htmlFor='preBuiltRadioID'
                        className='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                      >
                        <div className='mt-2'>
                          <div className='flex gap-2 items-center mb-2'>
                            <h4 className='text-gray-900 dark:text-white'>
                              Pre-built operation
                            </h4>
                            <svg
                              className='hidden h-5 w-5 text-blue-600'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>

                          <div className='flex flex-col sm:flex-row gap-2'>
                            <select
                              name='prebuilt'
                              className='p-2 w-full md:w-1/2 border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                              defaultValue='Operation'
                              disabled={!preBuiltCheck}
                            >
                              <option value='Operation' disabled>
                                Operation
                              </option>
                              {preBuiltOp.map((item) => (
                                <option value={item.name} key={item.label}>
                                  {item.label}
                                </option>
                              ))}
                            </select>

                            <input
                              placeholder='Value (€)'
                              type='number'
                              id='preBuiltOpValue'
                              className='p-2 w-full md:w-1/2 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={!preBuiltCheck}
                            />
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Custom */}
                    <div>
                      <input
                        type='radio'
                        name='opRadio'
                        id='customRadioID'
                        className='peer hidden [&:checked_+_label_svg]:block'
                        onChange={() => setPreBuiltCheck(false)}
                        checked={!preBuiltCheck}
                      />
                      <label
                        htmlFor='customRadioID'
                        className='block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                      >
                        <div className='mt-2'>
                          <div className='flex gap-2 items-center mb-2'>
                            <h4 className='text-gray-900 dark:text-white'>
                              Custom operation
                            </h4>
                            <svg
                              className='hidden h-5 w-5 text-blue-600'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>

                          {/* Prima operazione */}
                          <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                            <p className='text-gray-900 dark:text-white'>1.</p>
                            <div className='flex flex-col md:flex-row w-full md:w-3/5 gap-2'>
                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='type'
                                name='type1'
                                onChange={(event) => loadCustomData(event)}
                                disabled={preBuiltCheck}
                              >
                                <option value='type' disabled>
                                  Type
                                </option>
                                <option value='assets'>
                                  Stato patrimoniale attivo
                                </option>
                                <option value='liabilities'>
                                  Stato patrimoniale passivo
                                </option>
                                <option value='income'>Conto economico</option>
                              </select>

                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='operation'
                                name='type1'
                                disabled={preBuiltCheck}
                              >
                                <option value='operation' disabled>
                                  Operation
                                </option>

                                {customData1
                                  .find((item) => item.category === type1)
                                  ?.item.map((op) =>
                                    op.amount != null ? (
                                      <option value={op.name} key={op.name}>
                                        {op.label}
                                      </option>
                                    ) : (
                                      <Fragment key={op.name}></Fragment>
                                    )
                                  )}
                              </select>
                            </div>

                            <input
                              placeholder='Dare'
                              type='number'
                              name='type1'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />

                            <input
                              placeholder='Avere'
                              type='number'
                              name='type1'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />
                          </div>

                          {/* Seconda operazione */}
                          <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                            <p className='text-gray-900 dark:text-white'>2.</p>
                            <div className='flex flex-col md:flex-row w-full md:w-3/5 gap-2'>
                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='type'
                                name='type2'
                                onChange={(event) => loadCustomData(event)}
                                disabled={preBuiltCheck}
                              >
                                <option value='type' disabled>
                                  Type
                                </option>
                                <option value='assets'>
                                  Stato patrimoniale attivo
                                </option>
                                <option value='liabilities'>
                                  Stato patrimoniale passivo
                                </option>
                                <option value='income'>Conto economico</option>
                              </select>

                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='operation'
                                disabled={preBuiltCheck}
                                name='type2'
                              >
                                <option value='operation' disabled>
                                  Operation
                                </option>

                                {customData2
                                  .find((item) => item.category === type2)
                                  ?.item.map((op) =>
                                    op.amount != null ? (
                                      <option value={op.name} key={op.name}>
                                        {op.label}
                                      </option>
                                    ) : (
                                      <Fragment key={op.name}></Fragment>
                                    )
                                  )}
                              </select>
                            </div>

                            <input
                              placeholder='Dare'
                              type='number'
                              name='type2'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />

                            <input
                              placeholder='Avere'
                              type='number'
                              name='type2'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />
                          </div>

                          {/* Terza operazione */}
                          <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                            <p className='text-gray-900 dark:text-white'>3.</p>
                            <div className='flex flex-col md:flex-row w-full md:w-3/5 gap-2'>
                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='type'
                                name='type3'
                                onChange={(event) => loadCustomData(event)}
                                disabled={preBuiltCheck}
                              >
                                <option value='type' disabled>
                                  Type
                                </option>
                                <option value='assets'>
                                  Stato patrimoniale attivo
                                </option>
                                <option value='liabilities'>
                                  Stato patrimoniale passivo
                                </option>
                                <option value='income'>Conto economico</option>
                              </select>

                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='operation'
                                name='type3'
                                disabled={preBuiltCheck}
                              >
                                <option value='operation' disabled>
                                  Operation
                                </option>

                                {customData3
                                  .find((item) => item.category === type3)
                                  ?.item.map((op) =>
                                    op.amount != null ? (
                                      <option value={op.name} key={op.name}>
                                        {op.label}
                                      </option>
                                    ) : (
                                      <Fragment key={op.name}></Fragment>
                                    )
                                  )}
                              </select>
                            </div>

                            <input
                              placeholder='Dare'
                              type='number'
                              name='type3'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />

                            <input
                              placeholder='Avere'
                              type='number'
                              name='type3'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />
                          </div>

                          {/* Quarta operazione */}
                          <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                            <p className='text-gray-900 dark:text-white'>4.</p>
                            <div className='flex flex-col md:flex-row w-full md:w-3/5 gap-2'>
                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='type'
                                name='type4'
                                onChange={(event) => loadCustomData(event)}
                                disabled={preBuiltCheck}
                              >
                                <option value='type' disabled>
                                  Type
                                </option>
                                <option value='assets'>
                                  Stato patrimoniale attivo
                                </option>
                                <option value='liabilities'>
                                  Stato patrimoniale passivo
                                </option>
                                <option value='income'>Conto economico</option>
                              </select>

                              <select
                                className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                                defaultValue='operation'
                                disabled={preBuiltCheck}
                                name='type4'
                              >
                                <option value='operation' disabled>
                                  Operation
                                </option>

                                {customData4
                                  .find((item) => item.category === type4)
                                  ?.item.map((op) =>
                                    op.amount != null ? (
                                      <option value={op.name} key={op.name}>
                                        {op.label}
                                      </option>
                                    ) : (
                                      <Fragment key={op.name}></Fragment>
                                    )
                                  )}
                              </select>
                            </div>

                            <input
                              placeholder='Dare'
                              type='number'
                              name='type4'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />

                            <input
                              placeholder='Avere'
                              type='number'
                              name='type4'
                              className='p-2 w-full md:w-1/5 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                              disabled={preBuiltCheck}
                            />
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className='mt-4'>
                      <button
                        type='submit'
                        className='inline-flex w-full md:w-auto justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-teal-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      >
                        Insert
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Dashboard
