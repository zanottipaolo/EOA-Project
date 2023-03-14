import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { VscFilePdf } from "react-icons/vsc"

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)

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

  const SPattivo = [
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
  ]

  const SPpassivo = [
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
  ]

  const CEattivo = [
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
  ]

  const CEpassivo = [
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
    {
      name: "John Doe",
      birth: "01 - 01 - 1970",
      role: "Software Engineer",
      salary: "1000",
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center'>
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
            <h3 className='font-bold text-xl'>Assets</h3>
            <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
              <thead>
                <tr>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Label
                  </th>

                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Value
                  </th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {/* A) Credito verso i soci */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>A) Credito verso soci</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* B) Immobilizzazioni */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>B) Immobilizzazioni</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                  <td className='whitespace-nowrap px-4 py-2'></td>
                </tr>

                {/* B.1) Immateriali */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>B. I) Immobilizzazioni immateriali</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* B.2) Materiali */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>B. II) Immobilizzazioni materiali</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* B.3) Finanziarie */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>B. III) Immobilizzazioni finanziarie</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* C) Attivo circolante */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>C) Attivo circolante</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                  <td className='whitespace-nowrap px-4 py-2'></td>
                </tr>

                {/* C. I) Rimanenze */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>C. I) Rimanenze</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                  <td className='whitespace-nowrap px-4 py-2'></td>
                </tr>

                {/* C. I. 1) Materie prime */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>C. I. 1) Materie prime</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* C. I. 2) Prodotti finiti */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>C. I. 4) Prodotti finiti</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* C. II) Crediti */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>C. II) Crediti</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                  <td className='whitespace-nowrap px-4 py-2'></td>
                </tr>

                {/* C. II. 1) Verso clienti */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>C. I. 1) Verso clienti</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* C. II. 2) Verso imprese */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>C. II. 2) Verso imprese</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* C. III) Attività finanziarie */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>C. III) Attività finanziarie</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                  <td className='whitespace-nowrap px-4 py-2'></td>
                </tr>

                {/* C. III. 1) Partecipazioni */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p>C. III. 1) Partecipazioni in imprese controllate</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* C. IV) Cassa */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>C. IV) Cassa</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    500'000
                  </td>
                </tr>

                {/* D) Ratei e risconti attivi */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>D) Ratei e Risconti attivi</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Passivo */}
          <div className='overflow-x-auto md:p-12 w-full'>
            <h3 className='font-bold text-xl'>Liabilities</h3>
            <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
              <thead>
                <tr>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Label
                  </th>

                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Value
                  </th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {/* A) Patrimonio netto */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>A) Patrimonio netto</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                </tr>

                {/* A. I) Capitale sociale */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>A. I) Capitale sociale</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* A. II) Riserve */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>A. II) Riserve</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* A. IX) Utili dell'esercizio */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>A. IX) Utili dell'esercizio</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* B) Fondo Rischi e oneri */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>B) Fondo Rischi e oneri</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                </tr>

                {/* B. II) Per imposte */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>B. II) Imposte</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* C) TFR */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>C) TFR</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    500'000
                  </td>
                </tr>

                {/* D) Debiti */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>D) Debiti</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                </tr>

                {/* D. I) Commerciali */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>D. I) Commerciali</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* D. II) Altri debiti */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>D. II) Altri debiti</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* D. III) Finanziari */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className='font-bold'>D. III) Finanziari</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'></td>
                </tr>

                {/* D. III. 1) Debiti BP */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>D. III. 1) Debiti BP</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* D. III. 2) Debiti LP */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>D. III. 2) Debiti LP</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* D. VI) Verso fornitori */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>D. VI) Verso fornitori</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    <p>500'000</p>
                  </td>
                </tr>

                {/* E) Ratei e risconti passivi */}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                    <p className=''>E) Ratei e risconti passivi</p>
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                    500'000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Conto economico */}
      <div className='mt-10 w-full px-16'>
        <h2 className='font-bold text-2xl'>Income statement</h2>
        <div className='flex flex-col md:flex-row gap-y-10 md:justify-around'>
          {/* Attivo */}
          <div className='overflow-x-auto md:p-12 w-full'>
            <h3 className='font-bold text-xl'>Assets</h3>
            <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
              <thead>
                <tr>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Name
                  </th>

                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Salary
                  </th>
                  <th className='px-4 py-2'></th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {CEattivo.map((item) => (
                  <tr key={item.name}>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                      {item.name}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      {item.salary}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <a
                        href='/'
                        className='inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Passivo */}
          <div className='overflow-x-auto md:p-12 w-full'>
            <h3 className='font-bold text-xl'>Liabilities</h3>
            <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
              <thead>
                <tr>
                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Name
                  </th>

                  <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
                    Salary
                  </th>
                  <th className='px-4 py-2'></th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {CEpassivo.map((item) => (
                  <tr key={item.name}>
                    <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-700 dark:text-gray-200'>
                      {item.name}
                    </td>

                    <td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                      {item.salary}
                    </td>
                    <td className='whitespace-nowrap px-4 py-2'>
                      <a
                        href='/'
                        className='inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'
                      >
                        View
                      </a>
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900 dark:text-white'
                  >
                    Item information
                  </Dialog.Title>
                  <form onSubmit={handleSubmit}>
                    <div className='mt-2 flex flex-col sm:flex-row gap-2'>
                      <select
                        className='p-2 w-1/2 border-2 rounded-lg dark:bg-gray-500 dark:text-white'
                        defaultValue='Operation'
                      >
                        <option value='Operation' disabled>
                          Operation
                        </option>
                        <option value='Ford'>Ford</option>
                        <option value='Volvo'>Volvo</option>
                        <option value='Fiat'>Fiat</option>
                      </select>

                      <input
                        placeholder='Value'
                        className='p-2 w-full border-2 rounded-lg dark:bg-gray-500 dark:placeholder:text-gray-100 dark:text-white'
                      />
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
