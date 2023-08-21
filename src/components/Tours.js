import React from 'react'
import { tours } from '../data'
import Title from './Title'
const Tours = () => {
  return (
    <section class="section" id="tours">
         <Title  title="featured" subTitle="tours" />

    <div class="section-center featured-center">

        {tours.map((tour)=>(
            <article class="tour-card" key={tour.id}>
            <div class="tour-img-container">
              <img src={tour.img} class="tour-img" alt="" />
              <p class="tour-date">{tour.date}</p>
            </div>
            <div class="tour-info">
              <div class="tour-title">
                <h4>{tour.title}</h4>
              </div>
              <p>
                {tour.text}
              </p>
              <div class="tour-footer">
                <p>
                  <span><i class="fas fa-map"></i></span> {tour.location}
                </p>
                <p>{tour.duration} days</p>
                <p>from ${tour.cost}</p>
              </div>
            </div>
          </article>

        ))}
      

      
    </div>
  </section>
  )
}

export default Tours