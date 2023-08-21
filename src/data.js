import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'

export const pageLinks =[
    {id:1,href:'#home',text:'home'},
    {id:2,href:'#about',text:'about'},
    {id:3,href:'#services',text:'services'},
    {id:4,href:'#tours',text:'tours'},
]

export const socialLinks =[
    {id:1,href:'https://www.twitter.com',icon:'fab fa-facebook'},
    {id:2,href:'https://www.twitter.com',icon:'fab fa-twitter'},
    {id:3,href:'https://www.twitter.com',icon:'fab fa-squarespace'}
]   

export const services =[
    {
      id:1,
      title:'saving money',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
      icon:'fas fa-wallet fa-fw'
    },
    {
        id:2,
        title:'endless hiking',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
        icon:'fas fa-tree fa-fw'
    },
    {
        id:3,
        title:'amazing comfort',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
        icon:'fas fa-socks fa-fw'
    },
   
]   

export const tours =[
    {
      id:1,
      img:img1,
      date:'august 26th, 2020',
      title:'Tibet Adventure',
      text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, qui corporis.',
      location: 'china',
      duration: 6 ,
      cost:2100

    },
    {
        id:2,
        img:img2,
        date:'october 1th, 2020',
        title:'best of java',
        text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, qui corporis.',
        location: 'indonesia',
        duration: 11 ,
        cost:1400
  
      },
      {
        id:3,
        img:img3,
        date:'september 15th, 2020',
        title:'explore hong kong',
        text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, qui corporis.',
        location: 'hong kong',
        duration: 8 ,
        cost:5000
  
      },
      {
        id:4,
        img:img4,
        date:'august 26th, 2020',
        title:'paris adventure',
        text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, qui corporis.',
        location: 'paris',
        duration: 7 ,
        cost:3100
  
      }
   
]   