import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const FilterCard = () => {
  const filterData = [
    {
      filterType: "Location",
      array: ["Delhi NCR", "Banglore", "Pune", "Mumbai", "Hyderabad", "Chennai", "Nashik"]
    },
    {
      filterType: "Role",
      array: ["Frontend Developer", "UI/UX Developer", "Fullstack Developer", "System Design", "DevOps", "Data Scientist"]
    },
    {
      filterType: "Salary",
      array: ["0-40k", "42k-80k", "81k-1lakh", "1lakh-5lakh"]
    },
  ]
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className='font-bold text-lg'>{data.filterType}</h1>
            {
              data?.array?.map((item, index) => (
                <div className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={item}/>
                  <Label>{item}</Label>              
                  </div>
              ))
            }
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCard