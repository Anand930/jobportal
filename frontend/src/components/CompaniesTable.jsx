import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Avatar, AvatarImage } from './ui/avatar'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A List of Registered Companies</TableCaption>
            <TableHeader className={"mx-0"}>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className={"text-right"}>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>
                    <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s"/>
                    </Avatar>
                </TableCell>
                <TableCell>
                    CompanyName
                </TableCell>
                <TableCell>
                    18-07-24
                </TableCell>
                <TableCell className={"text-right cursor-pointer"}>
                    <Popover>
                    <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                        <PopoverContent className="w-32">
                            <div className='flex items-center gap-2 w-fit cursor-pointer '>
                                <Edit2/> <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>

            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable