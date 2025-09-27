export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-IN", {
    hour: "2-digit",   // ✅ singular & correct value
    minute: "2-digit", // ✅ singular & correct value
    hour12: false,
  });
}
