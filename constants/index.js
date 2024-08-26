export const sliderImages = [
  require("../assets/images/slide1.png"),
  require("../assets/images/slide2.png"),
  require("../assets/images/slide3.png"),
  require("../assets/images/slide4.png"),
  require("../assets/images/slide5.png"),
];

export const bodyParts = [
  {
    name: "Fire",
    image:
      "https://plus.unsplash.com/premium_photo-1663100437349-af98c70300f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of fire
  },
  {
    name: "Medical Emergencies",
    image:
      "https://plus.unsplash.com/premium_photo-1663039831017-8618ea64ef36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of medical emergencies
  },
  {
    name: "Natural Disasters",
    image:
      "https://plus.unsplash.com/premium_photo-1661962476059-13543ea45d4d?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of natural disasters
  },
  {
    name: "Lockdown Situations",
    image:
      "https://plus.unsplash.com/premium_photo-1723629620237-57b6e2440a83?q=80&w=1069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of lockdown situations
  },
  {
    name: "Evacuations",
    image:
      "https://plus.unsplash.com/premium_photo-1681884493195-978b88159c2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of evacuations
  },
  {
    name: "Power Outages",
    image:
      "https://images.unsplash.com/photo-1610056494052-6a4f83a8368c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of power outages
  },
  {
    name: "Hazardous Material Spills",
    image:
      "https://media.istockphoto.com/id/1655803935/photo/chemical-spill-industrial-waste-cleanup-and-environmental-safety.jpg?s=612x612&w=is&k=20&c=-akRlUJ7Yv4UtNfjRLKUzM1RIrkSngad7kPDeiMwO6I=", // Image of hazardous material spills
  },
  {
    name: "Violence or Fights",
    image:
      "https://media.istockphoto.com/id/2060736776/photo/sad-woman.jpg?s=612x612&w=is&k=20&c=Uwvi9XtdW0pHfd4ehcD3WB_ACpKSjZ_0ZaKrEst1UQc=", // Image of violence or fights
  },
  {
    name: "Severe Weather Alerts",
    image:
      "https://plus.unsplash.com/premium_photo-1675968513923-e07c6bbe0218?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of severe weather alerts
  },
  {
    name: "Transport Accidents",
    image:
      "https://media.istockphoto.com/id/912151500/photo/overturned-motorcycle-after-collision.jpg?s=612x612&w=is&k=20&c=WygaWuqVwqv02flII4xluIJNdEuEQ9Fj1sPzz5ycZ6I=", // Image of transport accidents
  },
];

export const categories = [
  "Light 💡", // Low alertness
  "Warning ⚠️", // Moderate alertness
  "Danger 🚨", // High alertness
  "Critical 🛑", // Very high alertness, urgent action needed
];

export const emergencyAlerts = [
  {
    name: "John Doe",
    date: "2024-08-26",
    timeSent: "01:45 PM",
    alertLevel: "🛑",
    desc: "Severe accident on Highway 50 involving multiple vehicles.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    date: "2024-08-26",
    timeSent: "12:30 PM",
    alertLevel: "🚨",
    desc: "Fire reported in the downtown area, multiple buildings affected.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Johnson",
    date: "2024-08-26",
    timeSent: "11:00 AM",
    alertLevel: "Warning ⚠️",
    desc: "Heavy rainfall expected, possible flooding in low-lying areas.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Davis",
    date: "2024-08-26",
    timeSent: "09:20 AM",
    alertLevel: "💡",
    desc: "Minor roadwork causing slight delays in traffic.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Robert Brown",
    date: "2024-08-26",
    timeSent: "02:15 PM",
    alertLevel: "🛑",
    desc: "Gas leak detected in residential area, evacuation in progress.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Olivia Wilson",
    date: "2024-08-26",
    timeSent: "08:45 AM",
    alertLevel: "🚨",
    desc: "Wildfire spreading rapidly in forested region, immediate evacuation required.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Daniel Miller",
    date: "2024-08-26",
    timeSent: "07:30 AM",
    alertLevel: "⚠️",
    desc: "High winds expected, potential for power outages.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Sophia Martinez",
    date: "2024-08-26",
    timeSent: "06:00 AM",
    alertLevel: "💡",
    desc: "Scheduled maintenance on water supply.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "William Garcia",
    date: "2024-08-26",
    timeSent: "10:20 AM",
    alertLevel: "🛑",
    desc: "Tornado spotted in the area, take shelter immediately.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Ava Anderson",
    date: "2024-08-26",
    timeSent: "03:30 PM",
    alertLevel: "🚨",
    desc: "Earthquake detected, aftershocks expected.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];
