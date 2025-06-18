"use client"

import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Img1 from "../assets/blogImg1.png"
import BusLoader from "@/components/BusLoader"

// Sample blog data (same as in Blogs.tsx)
const blogData = [
  {
    id: 1,
    image: Img1,
    title: "Exploring the Scenic Beauty of Nainital with Vivek Travels",
    date: "June 15, 2023",
    description:
      "Discover the breathtaking landscapes and serene lakes of Nainital with our premium travel services. Our expert guides ensure an unforgettable experience through the hills and valleys.",
    content: `
      <p>Nestled in the Kumaon region of Uttarakhand, Nainital is a charming hill station that has captivated travelers for generations. Known for its pear-shaped lake and surrounding mountains, this destination offers a perfect retreat from the hustle and bustle of city life.</p>
      
      <h2>The Journey Begins</h2>
      
      <p>With Vivek Travels, your journey to Nainital becomes as memorable as the destination itself. Our fleet of comfortable vehicles, ranging from luxury sedans to spacious tempo travelers, ensures that you travel in style and comfort. The winding roads through the foothills of the Himalayas offer breathtaking views, and our experienced drivers navigate them with expertise and care.</p>
      
      <p>The approximately 7-hour drive from Delhi to Nainital is punctuated with convenient rest stops at clean facilities, allowing you to refresh and rejuvenate. Our travel coordinators can also suggest interesting detours and viewpoints along the way, adding an element of adventure to your journey.</p>
      
      <h2>Exploring Nainital</h2>
      
      <p>Once you arrive in Nainital, a world of experiences awaits. The centerpiece of the town is the Naini Lake, surrounded by seven hills or 'Sapt Shring' as they are locally known. A boat ride on the lake offers panoramic views of the town and the surrounding mountains.</p>
      
      <p>With Vivek Travels' local transportation services, you can easily explore attractions like:</p>
      
      <ul>
        <li>Naina Devi Temple, an ancient shrine dedicated to Goddess Naina Devi</li>
        <li>Snow View Point, offering spectacular views of the snow-capped Himalayan peaks</li>
        <li>Tiffin Top, a picturesque picnic spot with stunning valley views</li>
        <li>The Mall Road, perfect for shopping and sampling local cuisine</li>
        <li>Eco Cave Gardens, a unique attraction featuring interconnected caves</li>
      </ul>
      
      <h2>Beyond Nainital</h2>
      
      <p>The region around Nainital is dotted with lesser-known but equally beautiful destinations. With our customized tour packages, you can explore places like Sattal (Seven Lakes), Bhimtal, Naukuchiatal (Nine Corners Lake), and the Jim Corbett National Park.</p>
      
      <p>Our drivers are well-versed with the local terrain and can take you to hidden gems that are often missed by regular tourists. Whether it's a secluded viewpoint or a local eatery serving authentic Kumaoni cuisine, our team ensures that you experience the true essence of the region.</p>
      
      <h2>Accommodation and Dining</h2>
      
      <p>Vivek Travels has partnerships with some of the best hotels and resorts in Nainital, catering to various budgets and preferences. From luxury lakeside properties to cozy boutique hotels, we can arrange accommodations that enhance your stay.</p>
      
      <p>The local cuisine of Nainital is a delightful blend of North Indian and Kumaoni flavors. Don't miss specialties like Bhatt ki Churkani (black soybean dish), Aloo ke Gutke (spiced potatoes), and the sweet Bal Mithai. Our guides can direct you to authentic local restaurants where you can savor these delicacies.</p>
      
      <h2>Best Time to Visit</h2>
      
      <p>While Nainital is beautiful year-round, the best time to visit depends on your preferences:</p>
      
      <ul>
        <li>March to June: Perfect for those who enjoy pleasant weather and outdoor activities</li>
        <li>July to September: Monsoon brings lush greenery but occasional landslides can disrupt travel</li>
        <li>October to February: Ideal for those who want to experience snowfall and winter sports</li>
      </ul>
      
      <p>Regardless of when you choose to visit, Vivek Travels ensures that your journey is comfortable, safe, and memorable. Our vehicles are equipped to handle all weather conditions, and our drivers are trained to navigate challenging terrains.</p>
      
      <h2>Book Your Nainital Adventure</h2>
      
      <p>Ready to explore the scenic beauty of Nainital? Contact Vivek Travels today to customize a package that suits your preferences and budget. Whether it's a weekend getaway, a family vacation, or a corporate retreat, we have the expertise and resources to make your trip to Nainital an unforgettable experience.</p>
      
      <p>With over 55 years of experience in the travel industry, Vivek Travels is your trusted partner for exploring the wonders of Nainital and beyond. Let us take care of the logistics while you focus on creating memories that last a lifetime.</p>
    `,
  },
  {
    id: 2,
    image:Img1,
    title: "The Comfort of Tempo Traveller: Perfect for Group Journeys",
    date: "May 28, 2023",
    description:
      "Learn why our Tempo Traveller is the ideal choice for group trips. With spacious interiors, comfortable seating, and modern amenities, your journey becomes as memorable as the destination.",
    content: `
      <p>When it comes to group travel, finding the right balance between comfort, space, and affordability can be challenging. This is where the Tempo Traveller from Vivek Travels emerges as the perfect solution, revolutionizing how groups experience road journeys.</p>
      
      <h2>The Versatile Tempo Traveller</h2>
      
      <p>The Tempo Traveller is a versatile vehicle designed specifically for group travel. At Vivek Travels, we offer various configurations to suit different group sizes:</p>
      
      <ul>
        <li>9-seater: Ideal for small families or friend groups</li>
        <li>12-seater: Perfect for medium-sized groups or corporate teams</li>
        <li>15-seater: Suitable for larger families or tour groups</li>
        <li>17-seater: Designed for extended groups requiring maximum space</li>
      </ul>
      
      <p>Each variant maintains the perfect balance between spaciousness and maneuverability, ensuring comfort without compromising on the ability to navigate diverse road conditions.</p>
      
      <h2>Unmatched Comfort Features</h2>
      
      <p>What sets our Tempo Travellers apart is the attention to comfort and convenience. Each vehicle comes equipped with:</p>
      
      <ul>
        <li>Plush, ergonomically designed seats with ample legroom</li>
        <li>Efficient air conditioning system with individual vents</li>
        <li>Entertainment system with LCD screens and quality audio</li>
        <li>Charging ports for electronic devices</li>
        <li>Ample storage space for luggage and personal items</li>
        <li>Tinted windows for privacy and sun protection</li>
        <li>Reading lights for night journeys</li>
      </ul>
      
      <p>These features ensure that every passenger enjoys a comfortable journey, regardless of the duration or terrain.</p>
      
      <h2>Perfect for Various Group Activities</h2>
      
      <p>The versatility of the Tempo Traveller makes it suitable for a wide range of group activities:</p>
      
      <h3>Family Vacations</h3>
      <p>Traveling with extended family becomes a joy when everyone can be accommodated in a single vehicle. No more convoy arrangements or worries about someone getting left behind. The spacious interiors allow for interaction during the journey, making the travel time an integral part of the vacation experience.</p>
      
      <h3>Corporate Outings</h3>
      <p>For team-building trips or corporate retreats, our Tempo Travellers provide the perfect environment for colleagues to bond. The journey becomes an opportunity for team members to interact in a relaxed setting, setting the tone for a productive outing.</p>
      
      <h3>Educational Tours</h3>
      <p>Schools and colleges find our Tempo Travellers ideal for educational excursions. The seating arrangement allows teachers to maintain supervision while ensuring students travel comfortably and safely.</p>
      
      <h3>Wedding Transportation</h3>
      <p>During wedding celebrations, coordinating transportation for family members and guests can be challenging. Our Tempo Travellers simplify this by accommodating larger groups, ensuring everyone arrives together and on time for various ceremonies.</p>
      
      <h2>Safety: Our Top Priority</h2>
      
      <p>At Vivek Travels, safety is never compromised. Our Tempo Travellers are equipped with:</p>
      
      <ul>
        <li>ABS (Anti-lock Braking System) for enhanced braking efficiency</li>
        <li>Seat belts for all passengers</li>
        <li>First-aid kits for emergencies</li>
        <li>Fire extinguishers as a precautionary measure</li>
        <li>Speed governors to maintain safe driving speeds</li>
        <li>GPS tracking for real-time monitoring</li>
      </ul>
      
      <p>Additionally, all our drivers undergo rigorous training in defensive driving techniques and are well-versed with routes across the country. They are also trained in basic first aid and emergency response protocols.</p>
      
      <h2>Cost-Effective Group Travel</h2>
      
      <p>Beyond comfort and safety, the Tempo Traveller offers significant economic advantages for group travel. By accommodating multiple passengers in a single vehicle, the cost per person is substantially reduced compared to hiring multiple smaller vehicles or opting for individual modes of transport.</p>
      
      <p>Moreover, our transparent pricing policy ensures that you know exactly what you're paying for, with no hidden charges or last-minute surprises. We offer both fixed package rates for popular routes and customized quotes for unique itineraries.</p>
      
      <h2>Environmental Benefits</h2>
      
      <p>In an age where environmental consciousness is crucial, group travel in a Tempo Traveller represents a more eco-friendly option. By consolidating multiple travelers into one vehicle, the carbon footprint per person is significantly reduced compared to traveling in multiple cars.</p>
      
      <p>Our fleet is regularly maintained to ensure optimal fuel efficiency and minimal emissions, aligning with our commitment to sustainable travel practices.</p>
      
      <h2>Booking Your Tempo Traveller</h2>
      
      <p>Reserving a Tempo Traveller with Vivek Travels is a straightforward process. You can book through our website, mobile app, or by calling our customer service center. Our team will help you select the right vehicle size based on your group size, journey duration, and specific requirements.</p>
      
      <p>For regular clients, we offer loyalty benefits and priority booking options. Corporate clients can also explore our long-term rental agreements for recurring transportation needs.</p>
      
      <h2>Experience the Difference</h2>
      
      <p>With over five decades of experience in the transportation industry, Vivek Travels has perfected the art of group travel. Our Tempo Travellers represent the culmination of our understanding of passenger needs and our commitment to exceeding expectations.</p>
      
      <p>Whether you're planning a family vacation, a corporate retreat, or any group journey, our Tempo Travellers ensure that your travel experience is as memorable as the destination itself. Contact us today to book your next group adventure with Vivek Travels.</p>
    `,
  },
  // Add more detailed blog entries as needed
]

export default function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch blog details
    const timer = setTimeout(() => {
      const foundBlog = blogData.find((b) => b.id === Number(id))
      setBlog(foundBlog || null)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    // return (
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       height: "500px",
    //     }}
    //   >
    //     <p
    //       style={{
    //         fontFamily: "Montserrat, sans-serif",
    //         fontSize: "20px",
    //       }}
    //     >
    //       Loading blog details...
    //     </p>
    //   </div>
    // )
    return  <BusLoader />
   
  }

  if (!blog) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            marginBottom: "16px",
          }}
        >
          Blog Not Found
        </h2>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "18px",
            marginBottom: "24px",
          }}
        >
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blogs"
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            color: "#3D3E98",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={20} style={{ marginRight: "8px" }} />
          Back to Blogs
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "48px 20px",
      }}
    >
      {/* Back to Blogs Link */}
      <Link
        to="/blogs"
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          color: "#3D3E98",
          textDecoration: "none",
          marginBottom: "32px",
        }}
      >
        <ArrowLeft size={20} style={{ marginRight: "8px" }} />
        Back to Blogs
      </Link>

      {/* Blog Header */}
      <div
        style={{
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "48px",
            color: "#000000",
            marginBottom: "16px",
          }}
        >
          {blog.title}
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            color: "#3D3E98",
          }}
        >
          {blog.date}
        </p>
      </div>

      {/* Featured Image */}
      <div
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "40px",
        }}
      >
        <img
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Blog Content */}
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "16px",
          lineHeight: "1.8",
          color: "#333333",
        }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Share and Tags Section */}
      <div
        style={{
          marginTop: "48px",
          paddingTop: "24px",
          borderTop: "1px solid #EEEEEE",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Tags */}
        <div>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            Tags:
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "4px 12px",
                backgroundColor: "#F5F5F5",
                borderRadius: "4px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
              }}
            >
              Travel
            </span>
            <span
              style={{
                padding: "4px 12px",
                backgroundColor: "#F5F5F5",
                borderRadius: "4px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
              }}
            >
              Nainital
            </span>
            <span
              style={{
                padding: "4px 12px",
                backgroundColor: "#F5F5F5",
                borderRadius: "4px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
              }}
            >
              Hill Station
            </span>
          </div>
        </div>

        {/* Share */}
        <div>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            Share:
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {/* Social Media Icons */}
            <button
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#3b5998",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "white", fontSize: "14px" }}>f</span>
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#1da1f2",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "white", fontSize: "14px" }}>t</span>
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#0077b5",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "white", fontSize: "14px" }}>in</span>
            </button>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div
        style={{
          marginTop: "64px",
        }}
      >
        <h2
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Related Posts
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {blogData
            .filter((b) => b.id !== blog.id)
            .slice(0, 3)
            .map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    height: "200px",
                  }}
                >
                  <img
                    src={relatedBlog.image || "/placeholder.svg"}
                    alt={relatedBlog.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "16px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    {relatedBlog.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "12px",
                      color: "#666666",
                      marginBottom: "12px",
                    }}
                  >
                    {relatedBlog.date}
                  </p>
                  <Link
                    to={`/blogs/${relatedBlog.id}`}
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#3D3E98",
                      textDecoration: "none",
                    }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
