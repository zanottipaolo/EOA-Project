import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

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

  const data = [
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
    <div className='flex flex-col items-center justify-center h-full'>
      {/* Add Item */}
      <button
        type='button'
        onClick={openModal}
        className='mt-5 rounded-full bg-teal-600 p-3 hover:bg-teal-700 transition-colors text-white shadow-md'
      >
        Add a new item!
      </button>

      {/* Stato patrimoniale */}
      <div className='mt-10'>
        <h2 className='font-bold text-2xl'>Stato patrimoniale</h2>
        <div className='flex flex-col md:flex-row'>
          {/* Attivo */}

          <div className='overflow-x-auto p-12'>
            <h3 className='font-bold text-xl'>Attivo</h3>
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
                {data.map((item) => (
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
          <div className='overflow-x-auto p-12'>
            <h3 className='font-bold text-xl'>Passivo</h3>
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
                {data.map((item) => (
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
