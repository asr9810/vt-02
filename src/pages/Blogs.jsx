
import { useState, useEffect } from "react"
import BlogCard from "../components/BlogCard"
import BusLoader from "../components/BusLoader"
import Img1 from "../assets/blogImg1.png"
import Img2 from "../assets/blogImg2.png"
import Img3 from "../assets/blogImg3.png"

// Sample blog data
const blogData = [
  {
    id: 1,
    image: Img1,
    title: "Exploring the Scenic Beauty of Nainital with Vivek Travels",
    date: "June 15, 2023",
    description:
      "Discover the breathtaking landscapes and serene lakes of Nainital with our premium travel services. Our expert guides ensure an unforgettable experience through the hills and valleys.",
  },
  {
    id: 2,
    image: Img2,
    title: "The Comfort of Tempo Traveller: Perfect for Group Journeys",
    date: "May 28, 2023",
    description:
      "Learn why our Tempo Traveller is the ideal choice for group trips. With spacious interiors, comfortable seating, and modern amenities, your journey becomes as memorable as the destination.",
  },
  {
    id: 3,
    image: Img3,
    title: "Luxury Bus Travel: Redefining Comfort on the Road",
    date: "April 10, 2023",
    description:
      "Experience the pinnacle of road travel with our luxury buses. Equipped with reclining seats, climate control, entertainment systems, and onboard refreshments for a truly premium journey.",
  },
  {
    id: 4,
    image: Img1,
    title: "Corporate Travel Solutions: Elevating Business Journeys",
    date: "March 22, 2023",
    description:
      "Discover how Vivek Travels is transforming corporate transportation with tailored solutions, professional chauffeurs, and seamless logistics for businesses of all sizes.",
  },
  {
    id: 5,
    image: Img1,
    title: "Weekend Getaways: Quick Escapes from Delhi NCR",
    date: "February 18, 2023",
    description:
      "Explore our curated list of perfect weekend destinations accessible from Delhi NCR. From historical sites to natural retreats, we've got the perfect vehicle for your weekend adventure.",
  },
  {
    id: 6,
    image: Img1,
    title: "Sustainable Travel: Our Commitment to Eco-Friendly Transportation",
    date: "January 30, 2023",
    description:
      "Learn about our initiatives to reduce carbon footprint, including our growing fleet of electric vehicles and sustainable practices that make your journey environmentally responsible.",
  },
  {
    id: 7,
    image: Img1,
    title: "Wedding Transportation: Making Your Special Day Perfect",
    date: "December 12, 2022",
    description:
      "From decorated luxury cars for the couple to comfortable buses for guests, discover how we can make transportation on your wedding day elegant, timely, and stress-free.",
  },
  {
    id: 8,
    image: Img1,
    title: "Safety First: Our Protocols for Secure Travel",
    date: "November 5, 2022",
    description:
      "Your safety is our priority. Read about our comprehensive safety measures, from regular vehicle maintenance to driver training and emergency protocols that ensure peace of mind.",
  },
  {
    id: 9,
    image: Img1,
    title: "The Evolution of Vivek Travels: 55 Years of Excellence",
    date: "October 20, 2022",
    description:
      "Take a journey through our history, from humble beginnings to becoming a leading name in transportation. Learn about our milestones, challenges, and vision for the future.",
  },
]

export default function Blogs() {
  const [blogs, setBlogs] = useState(blogData)
  const [loading, setLoading] = useState(true)

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // Increased to 3 seconds to enjoy the animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        gap: "72px",
        paddingTop: "48px",
        paddingBottom: "48px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        minHeight: "100vh",
      }}
    >
      {/* Blog Grid */}
      {loading ? (
        <BusLoader />
      ) : (
        <div
          style={{
            width: "85%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "72px",
            justifyContent: "center",
            padding: "0 40px",
          }}
        >
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              image={blog.image}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>
      )}
    </div>
  )
}
