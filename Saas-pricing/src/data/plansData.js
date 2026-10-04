/* 

create and export an array named plansData
each item in plansData is an object with:
    id: unique number
    title: string (e.g., "Free", "Pro", "Enterprise")
    price: number
    description: string
    isPopular: boolean (true for Pro, false for others)
    buttonText: string
    features: array of objects, where each feature has:
        id: unique string/number
        text: string
        isIncluded: boolean

*/

export const plansData = [
  {
    id: 1,
    title: "Free",
    price: 0,
    description: "Essential tools for individuals and hobby projects getting started.",
    isPopular: false,
    buttonText: "Get Started Free",
    features: [
      { id: "f1", text: "Up to 3 projects", isIncluded: true },
      { id: "f2", text: "Basic analytics", isIncluded: true },
      { id: "f3", text: "Community support", isIncluded: true },
      { id: "f4", text: "Custom domains", isIncluded: false },
      { id: "f5", text: "24/7 dedicated support", isIncluded: false }
    ]
  },
  {
    id: 2,
    title: "Pro",
    price: 29,
    description: "Advanced features and scaling options for growing teams.",
    isPopular: true,
    buttonText: "Start 14-Day Trial",
    features: [
      { id: "f1", text: "Unlimited projects", isIncluded: true },
      { id: "f2", text: "Advanced analytics", isIncluded: true },
      { id: "f3", text: "Priority support", isIncluded: true },
      { id: "f4", text: "Custom domains", isIncluded: true },
      { id: "f5", text: "24/7 dedicated support", isIncluded: false }
    ]
  },
  {
    id: 3,
    title: "Enterprise",
    price: 99,
    description: "Maximum power, security, and dedicated infrastructure.",
    isPopular: false,
    buttonText: "Contact Sales",
    features: [
      { id: "f1", text: "Unlimited projects", isIncluded: true },
      { id: "f2", text: "Custom analytics & reporting", isIncluded: true },
      { id: "f3", text: "Priority support", isIncluded: true },
      { id: "f4", text: "Custom domains & SSO", isIncluded: true },
      { id: "f5", text: "24/7 dedicated support", isIncluded: true }
    ]
  }
];