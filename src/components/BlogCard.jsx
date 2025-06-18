

import { Link } from "react-router-dom"

const BlogCard = ({ id, image, title, date, description }) => {
  return (
    <div 
      style={{
        width: "370px",
        height: "568px",
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center',
        gap: "24px",
      }}
    >
      {/* Blog Image */}
      <div
        style={{
          width: "350px",
          height: "279px",
          borderRadius: "8px",
          overflow: "hidden",
          flexShrink: 0, // Prevent image from shrinking
        }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Blog Content Container - Fixed height with internal flex layout */}
      <div
        style={{
          width: "350px",
          height: "265px", // Fixed height for content area (568 - 279 - 24 = 265px)
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // This pushes button to bottom
        }}
      >
        {/* Content Section (Title, Date, Description) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: "1", // Takes available space
          }}
        >
          {/* Blog Title - Fixed height */}
          <h3
            style={{
              width: "350px",
              height: "64px", // Fixed height for consistency
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "32px",
              letterSpacing: "0%",
              color: "#000000",
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2, // Limit to 2 lines
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </h3>

          {/* Blog Date - Fixed height */}
          <p
            style={{
              width: "350px",
              height: "15px", // Fixed height
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#000000",
              margin: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {date}
          </p>

          {/* Blog Description - Fixed height */}
          <p
            style={{
              width: "293px",
              height: "72px", // Fixed height
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "18px", // Adjusted for better text fitting
              letterSpacing: "0%",
              color: "#000000",
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4, // Limit to 4 lines
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        </div>

        {/* Read More Button - Always at bottom */}
        <div
          style={{
            marginTop: "auto", // Pushes button to bottom
            paddingTop: "16px", // Some spacing from content above
          }}
        >
          <Link to={`/blogs/${id}`}>
            <button
              style={{
                width: "178px",
                height: "36px",
                borderRadius: "4px",
                padding: "8px 24px",
                border: "1px solid #000000",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease", // Smooth hover effect
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#000000"
                e.target.querySelector("span").style.color = "#FFFFFF"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.querySelector("span").style.color = "#000000"
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.2em", // 20% letter spacing
                  color: "#000000",
                  transition: "color 0.3s ease",
                }}
              >
                READ MORE
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
