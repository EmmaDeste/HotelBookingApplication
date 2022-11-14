import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Booking from '../views/Booking.vue'
import Contact from '../views/Contact.vue'
import Enquiry from '../views/Enquiry.vue'
import Events from '../views/Events.vue'
import Feedbacks from '../views/Feedbacks.vue'
import Restaurant from '../views/Restaurant.vue'
import Rooms from '../views/Rooms.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/enquiry',
    name: 'Enquiry',
    component: Enquiry
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: Restaurant
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
