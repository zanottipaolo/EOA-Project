import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { VscFilePdf } from "react-icons/vsc"

const Dashboard = () => {
  // Hook
  const [isOpen, setIsOpen] = useState(false)
  const [assetsItem, setAssetsItem] = useState([
    {
      name: "a-credito-verso-soci",
      label: "A) Credito verso soci",
      amount: 0,
    },
    {
      name: "b-immobilizzazioni",
      label: "B) Immobilizzazioni",
      amount: null,
    },
    {
      name: "b-i-immobilizzazioni-immateriali",
      label: "B. I) Immobilizzazioni immateriali",
      amount: 500,
    },
    {
      name: "b-ii-immobilizzazioni-materiali",
      label: "B. II) Immobilizzazioni materiali",
      amount: 0,
    },
    {
      name: "b-iii-immobilizzazioni-finanziarie",
      label: "B. III) Immobilizzazioni finanziarie",
      amount: 0,
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
      amount: 450000,
    },
    {
      name: "c-i-4-prodotti-finiti",
      label: "C. I. 4) Prodotti finiti",
      amount: 0,
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
      amount: 0,
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
      amount: 0,
    },
    {
      name: "d-ratei-e-risconti-attivi",
      label: "D) Ratei e Risconti attivi",
      amount: 0,
    },
  ])
  const [liabilitiesItem, setLiabilitiesItem] = useState([
    {
      name: "a-patrimonio-netto",
      label: "A) Patrimonio netto",
      amount: null,
    },
    {
      name: "a-i-capitale-sociale",
      label: "A. I) Capitale sociale",
      amount: 0,
    },
    {
      name: "a-ii-riserve",
      label: "A. II) Riserve",
      amount: 0,
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
      label: "B. II) Imposte",
      amount: 0,
    },
    {
      name: "c-tfr",
      label: "C) TFR",
      amount: 0,
    },
    {
      name: "d-debiti",
      label: "D) Debiti",
      amount: null,
    },
    {
      name: "d-i-commerciali",
      label: "D. I) Commerciali",
      amount: 0,
    },
    {
      name: "d-ii-altri-debiti",
      label: "D. II) Altri debiti",
      amount: 0,
    },
    {
      name: "d-iii-finanziari",
      label: "D. III) Finanziari",
      amount: null,
    },
    {
      name: "d-iii-1-debiti-bp",
      label: "D. III. 1) Debiti BP",
      amount: 0,
    },
    {
      name: "d-iii-2-debiti-lp",
      label: "D. III. 2) Debiti LP",
      amount: 0,
    },
    {
      name: "d-vi-verso-fornitori",
      label: "D. VI) Verso fornitori",
      amount: 0,
    },
    {
      name: "e-ratei-risconti-passivi",
      label: "E) Ratei e risconti passivi",
      amount: 0,
    },
  ])
  const [incomeItems, setIncomeItems] = useState([
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
      name: "b-8-godimento-beni-terzi",
      label: "B. 8) Godimento beni terzi",
      amount: 0,
    },
    {
      name: "b-9costo-personale",
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
  ])
  const [typeOperations, setTypeOperations] = useState([
    {
      name: "type1",
      value: "",
    },
    {
      name: "type2",
      value: "",
    },
    {
      name: "type3",
      value: "",
    },
    {
      name: "type4",
      value: "",
    },
  ])

  // Function
  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(event)
    closeModal()
  }

  let customData1: any = []
  const loadOperation1 = (event: any) => {
    setTypeOperations(
      typeOperations.map((item) =>
        item.name === "type1"
          ? { name: "type1", value: event.target.value }
          : { ...item }
      )
    )

    if (event.target.value === "stato-patrimoniale-attivo") {
      customData1 = assetsItem
    } else if (event.target.value === "stato-patrimoniale-passivo") {
      customData1 = liabilitiesItem
    } else {
      customData1 = incomeItems
    }
  }

  let customData2
  const loadOperation2 = (event: any) => {
    setTypeOperations(
      typeOperations.map((item) =>
        item.name === "type2"
          ? { name: "type2", value: event.target.value }
          : { ...item }
      )
    )

    if (event.target.value === "stato-patrimoniale-attivo") {
      customData2 = assetsItem
    } else if (event.target.value === "stato-patrimoniale-passivo") {
      customData2 = liabilitiesItem
    } else {
      customData2 = incomeItems
    }
  }

  let customData3
  const loadOperation3 = (event: any) => {
    setTypeOperations(
      typeOperations.map((item) =>
        item.name === "type3"
          ? { name: "type3", value: event.target.value }
          : { ...item }
      )
    )

    if (event.target.value === "stato-patrimoniale-attivo") {
      customData3 = assetsItem
    } else if (event.target.value === "stato-patrimoniale-passivo") {
      customData3 = liabilitiesItem
    } else {
      customData3 = incomeItems
    }
  }

  let customData4
  const loadOperation4 = (event: any) => {
    setTypeOperations(
      typeOperations.map((item) =>
        item.name === "type4"
          ? { name: "type4", value: event.target.value }
          : { ...item }
      )
    )

    if (event.target.value === "stato-patrimoniale-attivo") {
      customData4 = assetsItem
    } else if (event.target.value === "stato-patrimoniale-passivo") {
      customData4 = liabilitiesItem
    } else {
      customData4 = incomeItems
    }
  }

  // Data
  const preBuiltOp = [
    {
      name: "aumentoCapitale",
      label: "Aumento di capitale",
    },
    {
      name: "pagaStipendi",
      label: "Paga gli stipendi",
    },
    {
      name: "ammortamento",
      label: "Ammortamento",
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center py-5'>
      <div className='flex flex-col md:flex-row gap-x-5 my-5'>
        {/* Add Item */}
        <button
          type='button'
          onClick={openModal}
          className='font-bold uppercase mt-5 rounded-lg bg-teal-600 p-3 hover:bg-teal-700 transition-colors text-white shadow-md'
        >
          new transaction
        </button>

        {/* Download PDF */}
        <button
          type='button'
          className='font-bold mt-5 flex gap-x-3 rounded-lg bg-red-400 p-3 hover:bg-red-500 transition-colors text-white shadow-md'
        >
          DOWNLOAD PDF
          <VscFilePdf className='text-white h-6 w-6' />
        </button>
      </div>

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
                  {assetsItem.reduce(
                    (acc, item) =>
                      acc + (item.amount != null ? item.amount : 0),
                    0
                  )}
                </span>
              </p>
            </div>
            <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
              <tbody className='divide-y divide-gray-200'>
                {assetsItem.map((asset) => (
                  <tr key={asset.name}>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                      <p
                        className={`${asset.amount != null ? "" : "font-bold"}`}
                      >
                        {asset.label}
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      <p>{asset.amount != null ? asset.amount : ""}</p>
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
                  {liabilitiesItem.reduce(
                    (acc, item) =>
                      acc + (item.amount != null ? item.amount : 0),
                    0
                  )}
                </span>
              </p>
            </div>
            <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
              <tbody className='divide-y divide-gray-200'>
                {liabilitiesItem.map((liabilities) => (
                  <tr key={liabilities.name}>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                      <p
                        className={`${
                          liabilities.amount != null ? "" : "font-bold"
                        }`}
                      >
                        {liabilities.label}
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      <p>
                        {liabilities.amount != null ? liabilities.amount : ""}
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
          <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
            <tbody className='divide-y divide-gray-200'>
              {incomeItems.map((income) => (
                <tr key={income.name}>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p
                      className={`${income.amount != null ? "" : "font-bold"}`}
                    >
                      {income.label}
                    </p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>{income.amount != null ? income.amount : ""}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                    <div className='mt-2'>
                      <h4 className='text-gray-900 dark:text-white'>
                        Pre-built operation
                      </h4>
                      <div className='flex flex-col sm:flex-row gap-2'>
                        <select
                          className='p-2 w-full md:w-1/2 border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='Operation'
                          name='prebuilt'
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
                          placeholder='Value'
                          type='number'
                          className='p-2 w-full md:w-1/2 border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />
                      </div>
                    </div>

                    {/* Custom */}
                    <div className='mt-2'>
                      <div className='flex gap-2 items-center mb-2'>
                        <h4 className='text-gray-900 dark:text-white'>
                          Custom operation
                        </h4>
                      </div>

                      {/* Prima operazione */}
                      <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                        <p className='text-gray-900 dark:text-white'>1.</p>

                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='type'
                          name='type1'
                          onChange={loadOperation1}
                        >
                          <option value='type' disabled>
                            Type
                          </option>
                          <option value='stato-patrimoniale-attivo'>
                            Stato patrimoniale attivo
                          </option>
                          <option value='stato-patrimoniale-passivo'>
                            Stato patrimoniale passivo
                          </option>
                          <option value='conto-economico'>
                            Conto economico
                          </option>
                        </select>

                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='operation'
                        >
                          <option value='operation' disabled>
                            Operation
                          </option>

                          {customData1?.map((item: { name: string; value: number; label: string }) => (
                            <option value={item.name} key={item.name}>
                              {item.label}
                            </option>
                          ))}
                        </select>

                        <input
                          placeholder='Dare'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />

                        <input
                          placeholder='Avere'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />
                      </div>

                      {/* Seconda operazione */}
                      <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                        <p className='text-gray-900 dark:text-white'>2.</p>
                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='type'
                          name='type2'
                          onChange={loadOperation2}
                        >
                          <option value='type' disabled>
                            Type
                          </option>
                          <option value='stato-patrimoniale-attivo'>
                            Stato patrimoniale attivo
                          </option>
                          <option value='stato-patrimoniale-passivo'>
                            Stato patrimoniale passivo
                          </option>
                          <option value='conto-economico'>
                            Conto economico
                          </option>
                        </select>

                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='operation'
                        >
                          <option value='operation' disabled>
                            Operation
                          </option>
                          {assetsItem.map((asset) => (
                            <option value={asset.name} key={asset.name}>
                              {asset.label}
                            </option>
                          ))}
                        </select>

                        <input
                          placeholder='Dare'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />

                        <input
                          placeholder='Avere'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />
                      </div>

                      {/* Terza operazione */}
                      <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                        <p className='text-gray-900 dark:text-white'>3.</p>
                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='type'
                          name='type3'
                          onChange={loadOperation3}
                        >
                          <option value='type' disabled>
                            Type
                          </option>
                          <option value='stato-patrimoniale-attivo'>
                            Stato patrimoniale attivo
                          </option>
                          <option value='stato-patrimoniale-passivo'>
                            Stato patrimoniale passivo
                          </option>
                          <option value='conto-economico'>
                            Conto economico
                          </option>
                        </select>

                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='operation'
                        >
                          <option value='operation' disabled>
                            Operation
                          </option>
                          {assetsItem.map((asset) => (
                            <option value={asset.name} key={asset.name}>
                              {asset.label}
                            </option>
                          ))}
                        </select>

                        <input
                          placeholder='Dare'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />

                        <input
                          placeholder='Avere'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />
                      </div>

                      {/* Quarta operazione */}
                      <div className='flex flex-col md:flex-row gap-2 mb-5 items-center'>
                        <p className='text-gray-900 dark:text-white'>4.</p>
                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='type'
                          name='type4'
                          onChange={loadOperation4}
                        >
                          <option value='type' disabled>
                            Type
                          </option>
                          <option value='stato-patrimoniale-attivo'>
                            Stato patrimoniale attivo
                          </option>
                          <option value='stato-patrimoniale-passivo'>
                            Stato patrimoniale passivo
                          </option>
                          <option value='conto-economico'>
                            Conto economico
                          </option>
                        </select>

                        <select
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                          defaultValue='operation'
                        >
                          <option value='operation' disabled>
                            Operation
                          </option>
                          {assetsItem.map((asset) => (
                            <option value={asset.name} key={asset.name}>
                              {asset.label}
                            </option>
                          ))}
                        </select>

                        <input
                          placeholder='Dare'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />

                        <input
                          placeholder='Avere'
                          type='number'
                          className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                        />
                      </div>
                    </div>

                    <div className='mt-4'>
                      <button
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-teal-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
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
