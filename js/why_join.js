// Object Destructuring
const reasons  = {
    reasons: [
      "Learn from experts",
      "Network with peers",
      "Get access to exclusive resources",
      "Enhance your skills",
      "Make new friends"
    ]
  };
  
  // Higher Order Function
  function createListElement(text) {
    return `<li>${text}</li>`;
  }
  
  // Map Method
  const listElements = reasons.map(createListElement);
  
  // forEach Method
  listElements.forEach(element => {
    document.getElementById("reasons-list").innerHTML += element;
  });
  
  // Callback Function
  function joinCallback() {
    console.log("You've joined our community!");
    localStorage.setItem("isMember", true);
  }
  
  // Arrow Function
  const handleJoinClick = () => {
    joinCallback();
    setTimeout(() => {
      console.log("Welcome message will be displayed in 2 seconds...");
    }, 2000);
  };
  
  // Event Listener
  document.getElementById("join-btn").addEventListener("click", handleJoinClick);
  
  // Error Handling
  try {
    const memberStatus = localStorage.getItem("isMember");
    if (memberStatus === "true") {
      console.log("You're already a member!");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
  
  // setInterval
  setInterval(() => {
    console.log("Reminder: You're part of our community!");
  }, 10000);
  
  // Filter Method
  const filteredReasons = reasons.filter(reason => reason.includes("skills"));
  console.log("Reasons related to skills:", filteredReasons);