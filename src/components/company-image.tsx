import React from 'react'

const CompanyImage = (): JSX.Element => {
  return (
    <div className="flex flex-shrink-0 items-center px-4">
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
    </div>
  )
}

export { CompanyImage }
