
export default function ChatbotIcon() {
  const handleChatClick = () => {
    // Add your chatbot functionality here
    console.log("Chatbot clicked")
  }

  return (
    <div
      className="fixed cursor-pointer z-50 flex items-center justify-center border border-4"
      style={{
        width: "70px",
        height: "70px",
        top: "711px",
        left: "1296px",
        border: "0.8px solid #3D3E98",
        borderRadius: "50%",
        boxShadow: "0px 0px 79.55px 0px #3D3E9840",
        backgroundColor: "white",
      }}
      onClick={handleChatClick}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ellipse%204-eTsKVR3G59TsD5fs1R3Z4c40Rx284R.png"
        alt="Chatbot"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  )
}
