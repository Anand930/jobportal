import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const CategoryCarousel = () => {
    const categroies = ["frontend Developer", "backend Developer", "Data Scientist", "Graphic Designer", "fullstack Developer"]
    return (
        <div>
            <Carousel className={"w-full max-w-xl mx-auto my-20 cursor-pointer"}>
                <CarouselContent>
                    {categroies.map((cat, i) => (
                        <CarouselItem key={i} className={"md:basis-1/2 lg:basis-1/3"}>
                            <Button variant="outline">{cat}</Button>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel